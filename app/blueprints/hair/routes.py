from flask import render_template, redirect, url_for, jsonify, request
from .import bp as app
from app.blueprints.hair.models import HairCategory, Hair, Pattern

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
        'categories': [i for i in HairCategory.query.all()]
    }
    return render_template('shop-categories.html', **context)

@app.route('/category', methods=['GET'])
def get_category():
    """
    [GET] /hair/category
    """
    name = request.args.get('name')
    category_id = HairCategory.query.filter_by(name=name.title()).first().id
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
    context = {
        'products': products,
        'category': HairCategory.query.filter_by(name=name.title()).first()
    }
    return render_template('shop-list.html', **context)