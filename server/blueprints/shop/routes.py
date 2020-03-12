from . import bp as shop
from flask import request, jsonify, url_for, current_app
from server import db
from server.braintree import gateway

from .models import Product, Coupon, Category, Order, Customer


@shop.route('/', methods=['GET'])
def index():
    """
    [GET] /shop
    """
    return jsonify([i.to_dict() for i in Product.query.all()])


@shop.route('/cart', methods=['GET'])
def cart():
    """
    [GET] /shop/cart
    """
    return "SHOP CART"


# @shop.route('/checkout', methods=['GET'])
# def checkout():
#     """
#     [GET] /shop/checkout
#     """
#     return "SHOP CHECKOUT"

@shop.route('/client_token', methods=['GET'])
def client_token():
    """
    [GET] /shop/client_token
    """
    bt_gateway = gateway(current_app)
    # print("Client Token:", gateway(current_app).client_token)
    # print("Config:", dir(gateway(current_app).config))
    # print("Customer:", gateway(current_app).customer)
    # print("Merchant:", gateway(current_app).merchant)
    # print("Merchant Account:", gateway(current_app).merchant_account)
    # print("Payment Method Nonce:", gateway(current_app).payment_method_nonce)
    # print("Testing:", gateway(current_app).testing)
    return bt_gateway.client_token.generate()

@shop.route("/checkout", methods=["POST"])
def create_purchase():
    """
    [GET] /shop/checkout
    """
    data = request.get_json()
    # print(data)
    return jsonify(data)
    # nonce_from_the_client = request.form["payment_method_nonce"]

@shop.route('/product/<int:id>', methods=['GET'])
def get_product(id):
    """
    [GET] /shop/product/<id>
    """
    return jsonify(Product.query.get_or_404(id).to_dict())


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


@shop.route('/coupon', methods=['GET'])
def get_coupons():
    """
    [GET] /shop/coupon
    """
    return jsonify([i.to_dict() for i in Coupon.query.all()])


@shop.route('/coupon/<int:id>', methods=['GET'])
def get_coupon(id):
    """
    [GET] /shop/coupon/<id>
    """
    return jsonify(Coupon.query.get_or_404(id).to_dict())


@shop.route('/coupon/create', methods=['POST'])
def create_coupon():
    """
    [POST] /shop/coupon/create
    """
    data = request.get_json()
    coupon = Coupon()
    coupon.from_dict(data)
    coupon.create_coupon()
    response = jsonify(coupon.to_dict())
    response.status_code = 201
    response.headers['Location'] = url_for('shop.get_coupon', id=coupon.id)
    return response


@shop.route('/coupon/edit/<int:id>', methods=['PUT'])
def update_coupon():
    """
    [POST] /shop/coupon/update
    """
    coupon = Coupon.query.get_or_404(id)
    data = request.get_json() or {}
    coupon.from_dict(data)
    db.session.commit()
    return jsonify(coupon.to_dict())


@shop.route('/coupon/delete/<int:id>', methods=['DELETE'])
def delete_coupon():
    """
    [POST] /shop/coupon/delete
    """
    coupon = Coupon.query.get_or_404(id)
    coupon.delete_coupon()
    return jsonify({'message': f'PRODUCT DELETED: {coupon.name} | {coupon.price} | {coupon.rating}'})


@shop.route('/order', methods=['GET'])
def get_orders():
    """
    [GET] /shop/order
    """
    return jsonify([i.to_dict() for i in Order.query.all()])


@shop.route('/order/<int:id>', methods=['GET'])
def get_order(id):
    """
    [GET] /shop/order/<id>
    """
    return jsonify(Order.query.get_or_404(id).to_dict())


@shop.route('/order/create', methods=['POST'])
def create_order():
    """
    [POST] /shop/order/create
    """
    data = request.get_json()
    order = Order()
    order.from_dict(data)
    order.create_order()
    response = jsonify(order.to_dict())
    response.status_code = 201
    response.headers['Location'] = url_for('shop.get_order', id=order.id)
    return response


@shop.route('/order/edit/<int:id>', methods=['PUT'])
def update_order():
    """
    [POST] /shop/order/update
    """
    order = Order.query.get_or_404(id)
    data = request.get_json() or {}
    order.from_dict(data)
    db.session.commit()
    return jsonify(order.to_dict())


@shop.route('/order/delete/<int:id>', methods=['DELETE'])
def delete_order():
    """
    [POST] /shop/order/delete
    """
    order = Order.query.get_or_404(id)
    order.delete_order()
    return jsonify({'message': f'PRODUCT DELETED: {order.name} | {order.price} | {order.rating}'})


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


