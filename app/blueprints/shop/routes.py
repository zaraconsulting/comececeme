from . import bp as shop
from flask import request, jsonify, url_for, current_app, render_template, redirect, session, flash
from app import db, login
from flask_login import current_user, login_required
from app.braintree import gateway
import pprint
from math import ceil
from braintree.exceptions.not_found_error import NotFoundError

from app.models import Product, Category, Customer, ProductReview, Order, Coupon, Hair, Cart


@shop.route('/products/categories', methods=['GET'])
def categories():
    context = {
        'product_categories': [i for i in Category.query.all() if i.name != 'Products']
    }
    return render_template('shop/shop-categories.html', **context)

@shop.route('/products/category', methods=['GET'])
def get_product_category():
    _id = request.args.get('id')
    category = Category.query.get(_id)
    products = Product.query.filter_by(category_id=category.id).all()
    context = {
        'products': products,
        'category': category,
    }
    return render_template('shop/shop-list.html', **context)

@shop.route('/products/all', methods=['GET'])
def get_products():
    """
    [GET] /shop/products/all
    """
    return jsonify([i.to_dict() for i in Product.query.all()])


@shop.route('/cart', methods=['GET'])
def cart():
    """
    [GET] /shop/cart
    """
    context = {}
    return render_template('shop/shop-cart.html', **context)

@shop.route('/cart/checkout', methods=['GET', 'POST'])
def cart_checkout():
    validation_error = request.args.get('validation_error')
    if validation_error:
        flash('There was an error processing your payment. Please try again.', 'warning')
    
    # TODO: IF THE SHOPPING CART IS EMPTY, FLASH MESSAGE SAYING THAT IT'S EMPTY
    if not Cart.query.filter_by(customerId=current_user.id).all():
        flash('Your shopping cart is empty.', 'warning')
        return redirect(url_for('shop.cart'))
    elif request.args.get('successful_payment'):
        flash('Thank you! Your payment was successful.', 'm-success')
        return redirect(url_for('shop.cart'))
    
    # connect to braintree
    bt_gateway = gateway(current_app)

    # get client token
    token = bt_gateway.client_token.generate()
    # print("Token", token)

    session['client_token'] = token

    # print(Cart.query.filter_by(customerId=current_user.id).all())
        # return redirect(url_for('shop.cart_checkout'))
    if request.method == 'POST':
        first_name = request.form.get('firstName')
        last_name = request.form.get('lastName')
        company = request.form.get('company')
        phone = request.form.get('phone')
        email = request.form.get('email')
        street_address = request.form.get('address')
        locality = request.form.get('city')
        region = request.form.get('state')
        postal_code = request.form.get('postalCode')
        amount = request.form.get('amount')

        shipping_first_name = request.form.get('firstNameShipping')
        shipping_last_name = request.form.get('lastNameShipping')
        shipping_company = request.form.get('companyShipping')
        shipping_address = request.form.get('addressshipping')
        shipping_locality = request.form.get('cityShipping')
        shipping_region = request.form.get('stateShipping')
        shipping_postal_code = request.form.get('postalCodeShipping')
        note = request.form.get('note')

        # print(int(float(amount) * 100))

        # Receives nonce from  form submission
        nonce_from_client = request.form.get('payment_method_nonce')

        try:
            result = bt_gateway.customer.find(current_user.id)

            # Update customer if already exists
            bt_gateway.customer.update(str(result.customer.id), {
                "first_name": first_name,
                "last_name": last_name,
                "company": company,
                "email": email,
                "phone": phone,
            })

        except:
            # Create customer in Braintree if not exists
            # print("Creating customer")
            customer = bt_gateway.customer.create({
                "first_name": first_name,
                "last_name": last_name,
                "company": company,
                "email": email,
                "phone": phone,
                "fax": "",
                "website": "",
                "payment_method_nonce": nonce_from_client
            })
            
        try:
            result = bt_gateway.transaction.sale({
                "amount": int(float(amount) * 100) // 100,
                "customer_id": customer.customer.id,
                # "device_data": ,
                "merchant_account_id": current_app.config.get('BT_MERCHANT_ACCOUNT_ID'),
                "customer": {
                    "first_name": first_name,
                    "last_name": last_name,
                    "company": company,
                    "phone": phone,
                    "email": email
                },
                "billing": {
                    "first_name": first_name,
                    "last_name": last_name,
                    "company": company,
                    "street_address": street_address,
                    "extended_address": "",
                    "locality": locality,
                    "region": region,
                    "postal_code": postal_code,
                    "country_code_alpha2": "US"
                },
                "shipping": {
                    "first_name": shipping_first_name,
                    "last_name": shipping_last_name,
                    "company": shipping_company,
                    "street_address": shipping_address,
                    "extended_address": "",
                    "locality": shipping_locality,
                    "region": shipping_region,
                    "postal_code": shipping_postal_code,
                    "country_code_alpha2": "US"
                },
                "options": {
                    "submit_for_settlement": True,
                    "store_in_vault_on_success": True
                }
            })

            # print("Result", result)

            # print("Success: ", result.is_success)

            # TODO: Figure out why result.is_success = False
            if result.is_success:
                # Update Customer data
                c = Customer.query.get(current_user.id)
                c.address_1 = street_address
                c._zip = postal_code
                c.phone = phone
                c.city = locality
                c.state = region

                # Create Order
                # db.session.add_all([Order(customer_id=current_user.id, product_id=Cart.query.filter_by(customerId=customer.id).first().productId) for _ in Cart.query.filter_by(customerId=customer.id).all()])
                for _ in Cart.query.filter_by(customerId=c.id).all():
                    db.session.add(Order(customer_id=current_user.id, product_id=Cart.query.filter_by(customerId=c.id).first().product_id))
                    db.session.commit()

                # Delete cart 
                [db.session.delete(i) for i in c.cart.all()]
                
                # Clear coupon session
                session['coupon'] = None

                db.session.commit()
                flash('Thank you! Your payment was successful.', 'm-success')
                return redirect(url_for('hair.get_categories', successful_payment=True))
            else:
                print(result.errors)
                flash('Oops! There was an error with your payment. Try again.', 'm-warning')
                return redirect(url_for('shop.cart_checkout'))
        except NotFoundError:
            print("There was a problem. Try again")
            return redirect(url_for('shop.cart_checkout', validation_error=True))
    return render_template('shop/shop-checkout.html')

@shop.route('/cart/clear', methods=['POST'])
def cart_clear():
    db.session.commit()
    return redirect(url_for('shop.index'))


@shop.route('/product/comment/add', methods=['POST'])
def add_product_review():
    rating = request.form.get('review_rating')
    data = {
        'author': request.form['review_name'],
        'email': request.form['review_email'],
        'body': request.form['review_message'],
        'rating': int(rating) if rating else 5,
        'product_id': int(request.form.get('product_id')),
    }
    product_review = ProductReview()
    product_review.from_dict(data)
    product_review.create_product_review()
    return redirect(url_for('shop.get_product', id=request.form['product_id']))

@shop.route('/product/cart/remove/<int:id>')
def remove_cart_product(id):
    [db.session.delete(item) for item in Cart.query.filter_by(product_id=id).all()]
    db.session.commit()
    flash('Product removed from cart', 'info')
    return redirect(url_for('shop.cart'))


@shop.route('/product/cart/update<int:id>')
def update_quantity(id):
    # unique_cart_items = CartItem.query.filter_by(name=CartItem.query.get(id).name).all()
    # print(unique_cart_items)
    # new_quantity = int(request.form['cart-quantity'])
    # if new_quantity < len(unique_cart_items):
    #     for i in range(abs(len(unique_cart_items) - len(unique_cart_items) - new_quantity)):
    #         [db.session.delete(i) for i in unique_cart_items]
    #         db.session.commit()
    return redirect(url_for('shop.cart'))


@shop.route('/product', methods=['GET'])
def get_product():
    """
    [GET] /shop/product/<id>
    """
    id_ = request.args.get('id')
    reviews_list = []
    # reviews_list = [i for i in [i.rating for i in Hair.query.get(id_).reviews.all()]]
    def getAverage(a_list):
        if len(a_list) == 0 or not a_list:
            return 0
        return ceil(sum(reviews_list) / len(reviews_list))
    context = {
        'product': Hair.query.get(id_),
        'average': getAverage(reviews_list)
    }
    return render_template('shop/shop-detail.html', **context)


@shop.route('/coupon', methods=['POST'])
def apply_coupon():
    coupon = Coupon.query.filter_by(text=request.get_json().get('text')).first()
    try:
        session['coupon'] = { 'text': coupon.text, 'discount': coupon.discount / 100}
        flash('Coupon applied', 'success')
    except:
        if coupon is None:
            flash('Coupon was not found.', 'warning')
        else:
            flash('There was an error applying the coupon. Please try again', 'notification')
    return jsonify({'message': 'success'})

@shop.route('/coupon/delete', methods=['POST'])
def clear_coupon():
    """
    [POST] /shop/coupon/delete
    """
    session['coupon'] = None
    # print('Coupon session deleted.')
    # print(session.get('coupon'))
    return jsonify({'message': 'success'})