from . import bp as shop
from flask import request, jsonify

@shop.route('/', methods=['GET'])
def index():
    """
    [GET] /shop
    """
    return "SHOP MAIN", 200

@shop.route('/cart', methods=['GET'])
def cart():
    """
    [GET] /shop/cart
    """
    return "SHOP CART", 200

@shop.route('/checkout', methods=['GET'])
def checkout():
    """
    [GET] /shop/checkout
    """
    return "SHOP CHECKOUT", 200

