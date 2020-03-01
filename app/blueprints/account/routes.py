from . import bp as account
from flask import jsonify, request

@account.route('/', methods=['GET'])
def index():
    """
    [GET] /account
    """
    return "ACCOUNT MAIN", 200

@account.route('/edit', methods=['POST'])
def edit():
    """
    [GET] /account/edit
    """
    return "ACCOUNT EDIT", 200

@account.route('/delete', methods=['POST'])
def delete():
    """
    [GET] /account/delete
    """
    return "ACCOUNT DELETE", 200

@account.route('/orders', methods=['GET'])
def orders():
    """
    [GET] /account/orders
    """
    return "ACCOUNT ORDERS", 200

@account.route('/login', methods=['GET', 'POST'])
def login():
    """
    [GET] /account/login
    """
    return "ACCOUNT LOGIN", 200

@account.route('/register', methods=['GET', 'POST'])
def register():
    """
    [GET] /account/register
    """
    return "ACCOUNT REGISTER", 200

