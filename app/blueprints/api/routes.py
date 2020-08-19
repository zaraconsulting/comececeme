from .import bp as app
from flask import jsonify, request, url_for
from app.blueprints.shop.models import Customer, Product, Category
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

@app.route('/product', methods=['PUT'])
def edit_product():
    """
    [PUT] /api/product?id=1/edit
    """
    _id = request.args.get('id')
    product = Product.query.get_or_404(_id)
    data = request.get_json() or {}
    product.from_dict(data)
    db.session.commit()
    return jsonify(product.to_dict())

# CATEGORIES
@app.route('/product/categories', methods=['GET'])
def get_categories():
    """
    [GET] /api/product/categories
    """
    return jsonify([i.to_dict() for i in Category.query.all()])


@app.route('/product/category/<int:id>', methods=['GET'])
def get_category(id):
    """
    [GET] /api/product/category/<id>
    """
    return jsonify(Category.query.get_or_404(id).to_dict())


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


