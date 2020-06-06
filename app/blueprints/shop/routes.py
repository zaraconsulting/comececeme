from . import bp as shop
from flask import request, jsonify, url_for, current_app, render_template, redirect, session
from app import db, login
from flask_login import current_user, login_required
from app.braintree import gateway
import pprint
from math import ceil

from .models import Product, Category, Customer, ProductReview, Cart


@shop.route('/products', methods=['GET'])
def index():
    """
    [GET] /shop/products
    """
    context = {
        'products': [i.to_dict() for i in Product.query.all() if i.in_stock == True or i.quantity > 0]
    }
    return render_template('shop-list.html', **context)

@shop.route('/products/sort', methods=['GET'])
def products_sort():
    order = request.args.get('order')
    if order == 'lowest':
        products = [i.to_dict() for i in Product.query.order_by(Product.price.asc()).all() if i.in_stock == True or i.quantity > 0]
    elif order == 'highest':
        products = [i.to_dict() for i in Product.query.order_by(Product.price.desc()).all() if i.in_stock == True or i.quantity > 0]
    else:
        products = [i.to_dict() for i in Product.query.all() if i.in_stock == True or i.quantity > 0]
    context = {
        'products': products
    }
    return render_template('shop-list.html', **context)

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
    return render_template('shop-cart.html', **context)

@shop.route('/cart/checkout', methods=['GET', 'POST'])
def cart_checkout():
    # connect to braintree
    bt_gateway = gateway(current_app)

    # get client token
    token = bt_gateway.client_token.generate()
    session['client_token'] = token

    data = request.form
    if request.method == 'POST':

        # Receives nonce from  form submission
        nonce_from_client = data.get('payment_method_nonce')
        try:
            result = bt_gateway.transaction.sale({
                "amount": data.get('amount'),
                "payment_method_nonce": data.get('payment_method_nonce'),
                # "device_data": ,
                "options": {
                    "submit_for_settlement": True
                }
            })
            customer = Customer.query.get(current_user.id)
            customer.address_1 = data.get('address')
            customer._zip = data.get('postalCode')
            customer.phone = data.get('phone')
            customer.city = data.get('city')
            customer.state = data.get('state')
            [db.session.delete(i) for i in customer.cart.all()]
            db.session.commit()
            return redirect(url_for('shop.index'))
        except:
            print("There was a problem. Try again")
            # return redirect(url_for('shop.cart_checkout'))
    return render_template('shop-checkout.html')

@shop.route('/cart/clear', methods=['POST'])
def cart_clear():
    db.session.commit()
    return redirect(url_for('shop.index'))

@login_required
@shop.route('/product/cart/add', methods=['POST'])
def add_cart_product():
    """
    [POST] /product/cart/add
    """
    # print(request.form.get('quantity'))
    if not current_user.is_authenticated:
        return redirect(url_for('authentication.login'))
    product = Product.query.get(request.args.get('id'))
    for i in range(int(request.form.get('quantity'))):
        db.session.add(Cart(customerId=int(current_user.id), productId=product.id))
    db.session.commit()
    return redirect(url_for('shop.get_product', id=product.id))


@shop.route('/product/comment/add', methods=['POST'])
def add_product_review():
    data = {
        'author': request.form['review_name'],
        'email': request.form['review_email'],
        'body': request.form['review_message'],
        'rating': int(request.form.get('review_rating')),
        'product_id': int(request.form.get('product_id')),
    }
    product_review = ProductReview()
    product_review.from_dict(data)
    product_review.create_product_review()
    return redirect(url_for('shop.get_product', id=request.form['product_id']))

@shop.route('/product/cart/remove/<int:id>')
def remove_cart_product(id):
    item = Cart.query.filter_by(productId=id).first()
    db.session.delete(item)
    db.session.commit()
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
    reviews_list = [i for i in [i.rating for i in Product.query.get(id_).reviews.all()]]
    def getAverage(a_list):
        if len(a_list) == 0:
            return 0
        return ceil(sum(reviews_list) / len(reviews_list))
    context = {
        'product': Product.query.get(id_),
        'average': getAverage(reviews_list)
    }
    return render_template('shop-detail.html', **context)


@shop.route('/product/create', methods=['POST'])
def create_product():
    """
    [POST] /shop/product/create
    """
    data = request.get_json()
    product = Product()
    product.from_dict(data)
    product.create_product()
    response = jsonify(product.to_dict())
    response.status_code = 201
    response.headers['Location'] = url_for('shop.get_product', id=product.id)
    return response

@shop.route('/product/<int:id>', methods=['PUT'])
def update_product(id):
    """
    [PUT] /shop/product/<id>
    """
    product = Product.query.get_or_404(id)
    data = request.get_json() or {}
    product.from_dict(data)
    db.session.commit()
    return jsonify(product.to_dict())


@shop.route('/product/<int:id>', methods=['DELETE'])
def delete_product(id):
    """
    [DELETE] /shop/product/<id>
    """
    product = Product.query.get_or_404(id)
    product.delete_product()
    return jsonify({'message': f'PRODUCT DELETED: {product.name} | {product.price} | {product.rating}'})


@shop.route('/product/review', methods=['GET'])
def get_product_review():
    """
    [GET] /product/review
    """
    return jsonify(ProductReview.query.get(request.args.get('id')).to_dict())

@shop.route('/product/review/create', methods=['POST'])
def create_product_review():
    """
    [POST] /product/review/create
    """
    data = request.get_json()
    product_review = ProductReview()
    product_review.from_dict(data)
    product_review.create_product_review()
    response = jsonify(product_review.to_dict())
    response.status_code = 201
    response.headers['Location'] = url_for('shop.get_product_review', id=product_review.id)
    return response


@shop.route('/category', methods=['GET'])
def get_categories():
    """
    [GET] /shop/category
    """
    return jsonify([i.to_dict() for i in Category.query.all()])


@shop.route('/category/<int:id>', methods=['GET'])
def get_category(id):
    """
    [GET] /shop/category/<id>
    """
    return jsonify(Category.query.get_or_404(id).to_dict())


@shop.route('/category/create', methods=['POST'])
def create_category():
    """
    [POST] /shop/category/create
    """
    data = request.get_json()
    category = Category()
    category.from_dict(data)
    category.create_category()
    response = jsonify(category.to_dict())
    response.status_code = 201
    response.headers['Location'] = url_for('shop.get_category', id=category.id)
    return response


@shop.route('/category/edit/<int:id>', methods=['PUT'])
def update_category():
    """
    [POST] /shop/category/update
    """
    category = Category.query.get_or_404(id)
    data = request.get_json() or {}
    category.from_dict(data)
    db.session.commit()
    return jsonify(category.to_dict())


@shop.route('/category/delete/<int:id>', methods=['DELETE'])
def delete_category():
    """
    [POST] /shop/category/delete
    """
    category = Category.query.get_or_404(id)
    category.delete_category()
    return jsonify({'message': f'PRODUCT DELETED: {category.name} | {category.price} | {category.rating}'})


# @shop.route('/coupon', methods=['GET'])
# def get_coupons():
#     """
#     [GET] /shop/coupon
#     """
#     return jsonify([i.to_dict() for i in Coupon.query.all()])


# @shop.route('/coupon/<int:id>', methods=['GET'])
# def get_coupon(id):
#     """
#     [GET] /shop/coupon/<id>
#     """
#     return jsonify(Coupon.query.get_or_404(id).to_dict())


# @shop.route('/coupon/create', methods=['POST'])
# def create_coupon():
#     """
#     [POST] /shop/coupon/create
#     """
#     data = request.get_json()
#     coupon = Coupon()
#     coupon.from_dict(data)
#     coupon.create_coupon()
#     response = jsonify(coupon.to_dict())
#     response.status_code = 201
#     response.headers['Location'] = url_for('shop.get_coupon', id=coupon.id)
#     return response


# @shop.route('/coupon/edit/<int:id>', methods=['PUT'])
# def update_coupon():
#     """
#     [POST] /shop/coupon/update
#     """
#     coupon = Coupon.query.get_or_404(id)
#     data = request.get_json() or {}
#     coupon.from_dict(data)
#     db.session.commit()
#     return jsonify(coupon.to_dict())


# @shop.route('/coupon/delete/<int:id>', methods=['DELETE'])
# def delete_coupon():
#     """
#     [POST] /shop/coupon/delete
#     """
#     coupon = Coupon.query.get_or_404(id)
#     coupon.delete_coupon()
#     return jsonify({'message': f'PRODUCT DELETED: {coupon.name} | {coupon.price} | {coupon.rating}'})


# @shop.route('/order', methods=['GET'])
# def get_orders():
#     """
#     [GET] /shop/order
#     """
#     return jsonify([i.to_dict() for i in Order.query.all()])


# @shop.route('/order/<int:id>', methods=['GET'])
# def get_order(id):
#     """
#     [GET] /shop/order/<id>
#     """
#     return jsonify(Order.query.get_or_404(id).to_dict())


# @shop.route('/order/create', methods=['POST'])
# def create_order():
#     """
#     [POST] /shop/order/create
#     """
#     data = request.get_json()
#     order = Order()
#     order.from_dict(data)
#     order.create_order()
#     response = jsonify(order.to_dict())
#     response.status_code = 201
#     response.headers['Location'] = url_for('shop.get_order', id=order.id)
#     return response


# @shop.route('/order/edit/<int:id>', methods=['PUT'])
# def update_order():
#     """
#     [POST] /shop/order/update
#     """
#     order = Order.query.get_or_404(id)
#     data = request.get_json() or {}
#     order.from_dict(data)
#     db.session.commit()
#     return jsonify(order.to_dict())


# @shop.route('/order/delete/<int:id>', methods=['DELETE'])
# def delete_order():
#     """
#     [POST] /shop/order/delete
#     """
#     order = Order.query.get_or_404(id)
#     order.delete_order()
#     return jsonify({'message': f'PRODUCT DELETED: {order.name} | {order.price} | {order.rating}'})


@shop.route('/customer', methods=['GET'])
def get_customers():
    """
    [GET] /shop/customer
    """
    return jsonify([i.to_dict() for i in Customer.query.all()])


@shop.route('/customer/<int:id>', methods=['GET'])
def get_customer(id):
    """
    [GET] /shop/customer/<id>
    """
    return jsonify(Customer.query.get_or_404(id).to_dict())


@shop.route('/customer/create', methods=['POST'])
def create_customer():
    """
    [POST] /shop/customer/create
    """
    data = request.get_json()
    customer = Customer()
    customer.from_dict(data)
    customer.create_customer()
    response = jsonify(customer.to_dict())
    response.status_code = 201
    response.headers['Location'] = url_for('shop.get_customer', id=customer.id)
    return response


@shop.route('/customer/edit/<int:id>', methods=['PUT'])
def update_customer():
    """
    [POST] /shop/customer/update
    """
    customer = Customer.query.get_or_404(id)
    data = request.get_json() or {}
    customer.from_dict(data)
    db.session.commit()
    return jsonify(customer.to_dict())


@shop.route('/customer/delete/<int:id>', methods=['DELETE'])
def delete_customer():
    """
    [POST] /shop/customer/delete
    """
    customer = Customer.query.get_or_404(id)
    customer.delete_customer()
    return jsonify({'message': f'PRODUCT DELETED: {customer.name} | {customer.price} | {customer.rating}'})


