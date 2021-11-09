from flask import render_template, redirect, url_for, jsonify, request, session, flash
from .import bp as app
from app.models import Cart, Product, ProductCategory
from flask_login import current_user
from app import db

@app.route('/product', methods=['GET'])
def get_product():
    """
    [GET] /products/product?category=<category>&name=<name>
    """
    category = request.args.get('category')
    name = request.args.get('name')
    print(request.args)
    print(Product.query.filter_by(name=name.title()).first())
    context = {
        'product': Product.query.filter_by(name=name.title()).first(),
        'category': ProductCategory.query.filter_by(name=category.title()).first(),
        'pattern': None
    }
    return render_template('shop/shop-detail.html', **context)

@app.route('/', methods=['GET'])
def get_products():
    """
    [GET] /products
    """
    context = {
        'products': [i.to_dict() for i in Product.query.all()],

    }
    return render_template('shop/shop-list.html', **context)

@app.route('/product/cart/add', methods=['POST'])
def add_cart_product():
    #     """
    #     [POST] /product/cart/add
    #     """
    if request.method == 'POST':
        r = request.get_json()

        print(r)

        session['id'] = r.get('id')
        session['category'] = r.get('category')
        # session['pattern'] = r.get('pattern')
        session['quantity'] = r.get('quantity')
        if r.get('product_name'):
            session['product_name'] = r.get('product_name')
        
        category = session.get('category')
        # pattern = session.get('pattern')

        if not session['active_user']:
            flash("You must login to continue", "m-warning")
            return redirect(url_for('products.get_product', category=category.lower(), name=r.get('product_name')))

        _id = session.get('id')
        quantity = int(session.get('quantity'))

        # print("Product ID:", _id)
        # print("Category:", category)
        # print("Hair Pattern:", pattern)
        # print("Quantity:", quantity)

        product = Product.query.get(_id)
        
        # print(product)

        # print(session['payment_shopping_cart'])

        shopping_cart = session['payment_shopping_cart']['products']

        if not shopping_cart:
            for _ in range(quantity):
                db.session.add(Cart(customerId=int(current_user.id), beauty_product_id=product.id))
        else:
            # Loop through the the list of cart items
            for i in shopping_cart:
                # if the product.name I'm trying to add is not already found
                if product.id not in [x['prod_id'] for x in shopping_cart]:
                    # add the product
                    for _ in range(quantity):
                        db.session.add(Cart(customerId=int(current_user.id), beauty_product_id=product.id))
                    break
                else:
                    # find the product with the same id as the product's id I'm trying to add to the cart
                    for i in shopping_cart:
                        if i['prod_id'] == product.id:
                            # increment the difference based on the quantity
                            for _ in range(quantity):
                                db.session.add(Cart(customerId=int(current_user.id), beauty_product_id=product.id))
                    break
        db.session.commit()
        flash('Product added to cart', 'success')
        # return redirect(request.referrer)
        return jsonify({'message': 'success'})