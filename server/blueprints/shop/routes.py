from . import bp as shop
from flask import request, jsonify, url_for
from server import db

from .models import Product


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


@shop.route('/checkout', methods=['GET'])
def checkout():
    """
    [GET] /shop/checkout
    """
    return "SHOP CHECKOUT"


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
