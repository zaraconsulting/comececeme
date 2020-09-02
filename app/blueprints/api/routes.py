from .import bp as app
from flask import jsonify, request, url_for
from app.blueprints.shop.models import Customer, Product, Category
from app.blueprints.hair.models import Hair, HairCategory, Pattern
from app import db

# PRODUCTS API
@app.route('/products', methods=['GET'])
def get_products():
    """
    [GET] /api/products
    """
    return jsonify([i.to_dict() for i in Product.query.all()])

    
@app.route('/product', methods=['GET'])
def get_product():
    """
    [GET] /api/product?id=1
    """
    _id = request.args.get('id')
    return jsonify(Product.query.get_or_404(_id).to_dict())

@app.route('/product/<int:id>', methods=['PUT'])
def edit_product(id):
    """
    [PUT] /api/product/edit/id=1
    """
    # _id = request.args.get('id')
    _id = request.args.get('id')
    product = Product.query.get_or_404(_id)
    data = request.get_json() or {}
    product.from_dict(data)
    db.session.commit()
    return jsonify(product.to_dict())


@app.route('/product/category', methods=['POST'])
def create_category():
    """
    [POST] /api/product/category
    """
    data = request.get_json()
    category = Category()
    category.from_dict(data)
    category.create_category()
    response = jsonify(category.to_dict())
    response.status_code = 201
    response.headers['Location'] = url_for('api.get_category', id=category.id)
    return response


@app.route('/product/category/edit/<int:id>', methods=['PUT'])
def update_category():
    """
    [PUT] /api/product/category/update
    """
    category = Category.query.get_or_404(id)
    data = request.get_json() or {}
    category.from_dict(data)
    db.session.commit()
    return jsonify(category.to_dict())


@app.route('/product/category/delete/<int:id>', methods=['DELETE'])
def delete_category():
    """
    [DELETE] /api/product/category/delete
    """
    category = Category.query.get_or_404(id)
    category.delete_category()
    return jsonify({'message': f'PRODUCT DELETED: {category.name} | {category.price} | {category.rating}'})

# CUSTOMER
@app.route('/customer', methods=['GET'])
def get_customers():
    """
    [GET] /shop/customer
    """
    return jsonify([i.to_dict() for i in Customer.query.all()])


@app.route('/customer/<int:id>', methods=['GET'])
def get_customer(id):
    """
    [GET] /shop/customer/<id>
    """
    return jsonify(Customer.query.get_or_404(id).to_dict())


@app.route('/customer/create', methods=['POST'])
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
    response.headers['Location'] = url_for('app.get_customer', id=customer.id)
    return response


@app.route('/customer/edit/<int:id>', methods=['PUT'])
def update_customer():
    """
    [POST] /shop/customer/update
    """
    customer = Customer.query.get_or_404(id)
    data = request.get_json() or {}
    customer.from_dict(data)
    db.session.commit()
    return jsonify(customer.to_dict())


@app.route('/customer/delete/<int:id>', methods=['DELETE'])
def delete_customer():
    """
    [POST] /shop/customer/delete
    """
    customer = Customer.query.get_or_404(id)
    customer.delete_customer()
    return jsonify({'message': f'PRODUCT DELETED: {customer.name} | {customer.price} | {customer.rating}'})


# HAIR
@app.route('/hair/products', methods=['GET'])
def get_hair_products():
    """
    [GET] /api/hair/products
    """
    return jsonify([i.to_dict() for i in Hair.query.all()])

    
@app.route('/hair/product', methods=['GET'])
def get_hair_product():
    """
    [GET] /api/hair/product?id=1
    """
    _id = request.args.get('id')
    return jsonify(Hair.query.get_or_404(_id).to_dict())

@app.route('/hair/product', methods=['POST'])
def create_hair_product():
    """
    [POST] /api/hair/product
    """
    data = request.get_json()
    hair = Hair()
    hair.from_dict(data)
    hair.create_hair_product()
    response = jsonify(hair.to_dict())
    response.status_code = 201
    response.headers['Location'] = url_for('api.get_hair_product', id=hair.id)
    return response

@app.route('/hair/product', methods=['PUT'])
def edit_hair_product():
    """
    [PUT] /api/hair/product?id=1/edit
    """
    _id = request.args.get('id')
    hair_product = Hair.query.get_or_404(_id)
    data = request.get_json() or {}
    hair_product.from_dict(data)
    db.session.commit()
    return jsonify(hair_product.to_dict())

@app.route('/hair/product/<id>', methods=['DELETE'])
def delete_hair_product(id):
    """
    [DELETE] /api/hair/product/<id>
    """
    hair_product = Hair.query.get(id)
    hair_product.delete_hair_product()
    return jsonify({'message': f'HAIR PRODUCT DELETED: {hair_product.pattern} ({hair_product.id})'})

# HAIR CATEGORIES
@app.route('/hair/categories', methods=['GET'])
def get_hair_categories():
    """
    [GET] /api/hair/categories
    """
    return jsonify([i.to_dict() for i in HairCategory.query.all()])


@app.route('/hair/category/<name>', methods=['GET'])
def get_hair_category(name):
    """
    [GET] /api/hair/category/<name>
    """
    category = HairCategory.query.filter_by(name=name.title()).first()
    return jsonify(HairCategory.query.get_or_404(category.id).to_dict())


@app.route('/hair/category', methods=['POST'])
def create_hair_category():
    """
    [POST] /api/hair/category
    """
    data = request.get_json()
    hair_category = HairCategory()
    hair_category.from_dict(data)
    print(hair_category)
    hair_category.create_hair_category()
    response = jsonify(hair_category.to_dict())
    print(jsonify(hair_category.to_dict()))
    response.status_code = 201
    # response.headers['Location'] = url_for('api.get_hair_category', name=hair_category.name)
    return response


@app.route('/hair/category/edit/<name>', methods=['PUT'])
def update_hair_category(name):
    """
    [PUT] /api/hair/category/edit/<name>
    """
    hair_category = HairCategory.query.filter_by(name=name.title()).first()
    data = request.get_json() or {}
    hair_category.from_dict(data)
    db.session.commit()
    return jsonify(hair_category.to_dict())


@app.route('/hair/category/delete/<name>', methods=['DELETE'])
def delete_hair_category(name):
    """
    [DELETE] /api/hair/category/delete/name
    """
    hair_category = HairCategory.query.filter_by(name=name.title()).first()
    hair_category.delete_hair_category()
    return jsonify({'message': f'PRODUCT DELETED: {hair_category.name}'})

# HAIR PATTERN
@app.route('/hair/patterns', methods=['GET'])
def get_hair_patterns():
    """
    [GET] /api/hair/patterns
    """
    return jsonify([i.to_dict() for i in Pattern.query.all()])

@app.route('/hair/pattern', methods=['POST'])
def create_hair_pattern():
    """
    [POST] /api/hair/PATTERN
    """
    data = request.get_json()
    pattern = Pattern()
    pattern.from_dict(data)
    pattern.create_hair_pattern()
    response = jsonify(pattern.to_dict())
    response.status_code = 201
    # response.headers['Location'] = url_for('api.get_hair_pattern', id=pattern.id)
    return response


@app.route('/hair/pattern/<id>', methods=['DELETE'])
def delete_hair_pattern(id):
    """
    [DELETE] /api/hair/product/<id>
    """
    hair_pattern = Pattern.query.get(id)
    hair_pattern.delete_hair_pattern()
    return jsonify({'message': f'HAIR PRODUCT DELETED: {hair_pattern.name} ({hair_pattern.id})'})


@app.route('/hair/pattern/<pattern>', methods=['GET'])
def get_hair_pattern(pattern):
    """
    [GET] /api/hair/pattern/<pattern>
    """
    return jsonify([i.to_dict() for i in Pattern.query.filter_by(name=pattern).first()])

