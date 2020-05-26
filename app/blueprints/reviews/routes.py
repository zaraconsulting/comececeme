from flask import render_template, jsonify
from .import bp as reviews

from .models import Review

@reviews.route('/', methods=['GET'])
def index():
    """
    [GET] /reviews
    """
    return jsonify([i.to_dict() for i in Review.query.all()])


@reviews.route('/create', methods=['POST'])
def create_account():
    """
    [GET] /reviews/create
    """
    data = request.get_json()
    user = Account()
    user.from_dict(data)
    user.create_user()
    response = jsonify(user.to_dict())
    response.status_code = 201
    response.headers['Location'] = url_for('reviews.get_user', id=user.id)
    return response


@reviews.route('/edit', methods=['PUT'])
def edit():
    """
    [GET] /reviews/edit
    """
    return "ACCOUNT EDIT", 201


@reviews.route('/delete', methods=['POST'])
def delete():
    """
    [GET] /reviews/delete
    """
    return "ACCOUNT DELETE", 200
