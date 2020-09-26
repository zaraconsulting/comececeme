from . import bp as account
from flask import jsonify, request, url_for

from app.models import Account


@account.route('/', methods=['GET'])
def index():
    """
    [GET] /account
    """
    return jsonify([i.to_dict() for i in Account.query.all()])


@account.route('/create', methods=['POST'])
def create_account():
    """
    [GET] /account/create
    """
    data = request.get_json()
    user = Account()
    user.from_dict(data)
    user.create_user()
    response = jsonify(user.to_dict())
    response.status_code = 201
    response.headers['Location'] = url_for('account.get_user', id=user.id)
    return response


@account.route('/edit')
def edit():
    """
    [GET] /account/edit
    """
    return "ACCOUNT EDIT", 201


@account.route('/delete', methods=['POST'])
def delete():
    """
    [GET] /account/delete
    """
    return "ACCOUNT DELETE", 200


# @account.route('/orders', methods=['GET'])
# def orders():
#     """
#     [GET] /account/orders
#     """
#     return "ACCOUNT ORDERS", 200


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
