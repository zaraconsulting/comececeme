from flask import render_template, redirect, url_for, jsonify, request, session, flash
from .import bp as app
from app.blueprints.hair.models import HairCategory, Hair, Pattern, Cart
from flask_login import current_user
from app import db

@app.route('/product', methods=['POST'])
def get_product():
    _id = request.args.get('id')
    context = {
        'product': Hair.query.get(_id)
    }
    return render_template('shop-list.html', **context)

@app.route('/categories', methods=['GET'])
def get_categories():
    """
    [GET] /hair/categories
    """
    context = {
        'categories': [i for i in HairCategory.query.all()],
        'frontals': HairCategory.query.filter_by(name='Frontals').first(),
        'closures': HairCategory.query.filter_by(name='Closures').first()
    }
    return render_template('shop-categories.html', **context)

@app.route('', methods=['GET'])
def get_category():
    """
    [GET] /hair?category=
    """
    category = request.args.get('category').title()
    category_id = HairCategory.query.filter_by(name=category).first().id
    pattern_list = list(set([i.pattern for i in Hair.query.filter_by(category_id=category_id).all()]))
    products = []
    for pattern in pattern_list:
        hair_products = Hair.query.filter_by(category_id=category_id).all()
        display_products = []
        for i in hair_products:
            if i.pattern == pattern and i.pattern not in [a_dict for a_dict in display_products]:
                display_products.append({'name': i.pattern, 'price': i.price})
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
    return render_template('shop-list.html', **context)

@app.route('<category>', methods=['GET'])
def get_pattern(category):
    """
    [GET] /hair/<category>?pattern=<pattern>
    """
    category = category.title() or session.get('category')
    # print(request.args)
    # print(session)
    if request.args.get('pattern'):
        pattern = request.args.get('pattern').title()
    else:
        pattern = session.get('pattern').title()
    session['pattern'] = pattern
    products_by_category = Hair.query.filter_by(category_id=HairCategory.query.filter_by(name=category).first().id).all()
    filtered_products = sorted([i for i in products_by_category if i.pattern == pattern if i], key=lambda x: x.price)
    product = filtered_products[0]
    # print(product.bundle_length)
    # print(product)
    if request.method == 'GET':
        context = {
            'product': product,
            'filtered_products': filtered_products,
            'image': Pattern.query.filter_by(name=pattern).first().image,
            'description': HairCategory.query.filter_by(name=category).first().description,
            'category': category,
            'pattern': pattern
        }
    return render_template('shop-detail.html', **context)
        
@app.route('/product/cart/add', methods=['POST'])
def add_cart_product():

    #     """
    #     [POST] /product/cart/add
    #     """
    
        # return redirect(url_for('authentication.login'))
    
    if request.method == 'POST':
        r = request.get_json()
        
        session['id'] = r.get('id')
        session['category'] = r.get('category')
        session['pattern'] = r.get('pattern')
        session['quantity'] = r.get('quantity')
        
        if not session['active_user']:
            flash("You must login to continue", "m-warning")
            return redirect(url_for('hair.get_pattern', category=category.lower(), pattern=pattern.lower()))

        _id = session.get('id')
        category = session.get('category')
        pattern = session.get('pattern')
        # print("Pattern:", pattern)
        quantity = int(session.get('quantity'))

        # print("Product ID:", _id)
        # print("Category:", category)
        # print("Hair Pattern:", pattern)
        # print("Quantity:", quantity)

        product = Hair.query.get(_id)
        # print(product)
        for _ in range(quantity):
            db.session.add(Cart(customerId=int(current_user.id), product_id=product.id))
        db.session.commit()
        return jsonify({'message': 'success'})
        # return redirect(url_for('hair.get_pattern', category=category.lower(), pattern=pattern.lower()))