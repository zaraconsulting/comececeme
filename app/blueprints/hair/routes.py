from flask import render_template, redirect, url_for, jsonify, request, session, flash
from .import bp as app
from app.models import HairCategory, Hair, Pattern, Cart, HairTip
from flask_login import current_user
from app import db

@app.route('/product', methods=['POST'])
def get_product():
    _id = request.args.get('id')
    context = {
        'product': Hair.query.get(_id)
    }
    return render_template('shop/shop-list.html', **context)

@app.route('/tips', methods=['GET'])
def tips():
    """
    [GET] /hair/tips
    """
    context = {
        'tips': HairTip.query.all()
    }
    return render_template('hair-tips.html', **context)

@app.route('/categories', methods=['GET'])
def get_categories():
    """
    [GET] /hair/categories
    """
    context = {
        'categories': [i for i in HairCategory.query.all() if len(i.products.all()) > 0 if i.display_name != 'Wigs'],
        'frontals': HairCategory.query.filter_by(name='Frontals').first(),
        'closures': HairCategory.query.filter_by(name='Closures').first()
    }
    return render_template('shop/shop-categories.html', **context)

@app.route('', methods=['GET'])
def get_category():
    """
    [GET] /hair?category=
    """
    category = request.args.get('category').title()
    category_id = HairCategory.query.filter_by(name=category).first().id
    pattern_list = list(set([i.pattern for i in Hair.query.filter_by(category_id=category_id).all() if i.is_viewable]))
    products = []
    for pattern in pattern_list:
        hair_products = Hair.query.filter_by(category_id=category_id).all()
        display_products = []
        for i in hair_products:
            if i.pattern == pattern and i.pattern not in [a_dict for a_dict in display_products]:
                display_products.append({'name': i.pattern, 'display_name': Pattern.query.filter_by(name=i.pattern).first().display_name, 'price': i.price})
                break
        a_dict = {
            'pattern': display_products,
            'image': Pattern.query.filter_by(name=pattern).first().image,
        }
        products.append(a_dict)
    session['category'] = category
    context = {
        'products': products,
        'category': HairCategory.query.filter_by(name=category.title()).first()
    }
    return render_template('shop/shop-list.html', **context)

@app.route('<category>', methods=['GET'])
def get_pattern(category):
    """
    [GET] /hair/<category>?pattern=<pattern>
    """
    category = category.title() or session.get('category')
    if request.args.get('pattern'):
        pattern = request.args.get('pattern').title()
    else:
        pattern = session.get('pattern').title() or None
    session['pattern'] = pattern
    products_by_category = Hair.query.filter_by(category_id=HairCategory.query.filter_by(name=category).first().id).all()
    filtered_products = sorted([i for i in products_by_category if i.pattern == pattern if i], key=lambda x: x.price)
    product = filtered_products[0]
    if request.method == 'GET':
        context = {
            'product': product,
            'filtered_products': filtered_products,
            'image': Pattern.query.filter_by(name=pattern).first().image,
            'description': HairCategory.query.filter_by(name=category).first().description,
            'category': {
                'name': category,
                'display_name': HairCategory.query.filter_by(name=category).first().display_name
            },
            'pattern': Pattern.query.filter_by(name=pattern).first()
        }
        # print(context['pattern'].display_name)
    return render_template('shop/shop-detail.html', **context)
        
@app.route('/product/cart/add', methods=['POST'])
def add_cart_product():
    #     """
    #     [POST] /product/cart/add
    #     """
    if request.method == 'POST':
        r = request.get_json()
        
        session['id'] = r.get('id')
        session['category'] = r.get('category')
        session['pattern'] = r.get('pattern')
        session['quantity'] = r.get('quantity')
        
        category = session.get('category')
        pattern = session.get('pattern')

        if not session['active_user']:
            flash("You must login to continue", "m-warning")
            return redirect(url_for('hair.get_pattern', category=category.lower(), pattern=pattern.lower()))

        _id = session.get('id')
        quantity = int(session.get('quantity'))

        # print("Product ID:", _id)
        # print("Category:", category)
        # print("Hair Pattern:", pattern)
        # print("Quantity:", quantity)

        product = Hair.query.get(_id)

        shopping_cart = session['payment_shopping_cart']['products']

        if not shopping_cart:
            for _ in range(quantity):
                db.session.add(Cart(customerId=int(current_user.id), product_id=product.id))
        else:
            # Loop through the the list of cart items
            for i in shopping_cart:
                # if the product.name I'm trying to add is not already found
                if product.id not in [x['prod_id'] for x in shopping_cart]:
                    # add the product
                    for _ in range(quantity):
                        db.session.add(Cart(customerId=int(current_user.id), product_id=product.id))
                    break
                else:
                    # find the product with the same id as the product's id I'm trying to add to the cart
                    for i in shopping_cart:
                        if i['prod_id'] == product.id:
                            # increment the difference based on the quantity
                            for _ in range(quantity):
                                db.session.add(Cart(customerId=int(current_user.id), product_id=product.id))
                    break
        db.session.commit()
        flash('Product added to cart', 'success')
        return jsonify({'message': 'success'})

@app.route('/category/wigs', methods=['GET', 'POST'])
def get_wigs():
    """
    [GET] /hair/category/wigs
    """
    # products_by_category = Hair.query.filter_by(category_id=HairCategory.query.filter_by(name=category).first().id).all()
    products =  [i.to_dict() for i in HairCategory.query.filter_by(name='Wigs').first().products.all() if i.is_viewable]
    context = {
        'products': products
    }
    # print(products)
    return render_template('shop/shop-wigs.html', **context)

@app.route('/wigs', methods=['GET'])
def get_wig():
    """
    [GET] /hair/wigs?pattern=<pattern>?name=<name>
    """
    if request.args.get('pattern'):
        pattern = request.args.get('pattern').title()
    else:
        pattern = session.get('pattern').title() or None

    if request.args.get('name'):
        name = request.args.get('name').title()
    else:
        name = session.get('name').title() or None
    session['name'] = name
    # products_by_category = Hair.query.filter_by(category_id=HairCategory.query.filter_by(name='Wigs').first().id).all()
    # filtered_products = sorted([i for i in products_by_category if i.pattern == pattern if i], key=lambda x: x.price)
    product = Hair.query.filter_by(name=name, pattern_id=Pattern.query.filter_by(name=pattern).first().id).first()
    # print(product.to_dict())
    # filter_by(name=name).filter_by(pattern_id=Pattern.query.filter_by(name=name).first().id).first()
    # print(product)
    if request.method == 'GET':
        context = {
            'product': product,
            # 'filtered_products': filtered_products,
            # 'image': product.image,
            'description': HairCategory.query.filter_by(name='Wigs').first().description,
            'category': {
                'name': 'Wigs',
                'display_name': HairCategory.query.filter_by(name='Wigs').first().display_name
            },
            'pattern': Pattern.query.filter_by(name=pattern).first()
        }
        # print(context['pattern'].display_name)
    return render_template('shop/shop-detail.html', **context)
