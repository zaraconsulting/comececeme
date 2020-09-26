from flask import render_template, jsonify, request, url_for
from .import bp as reviews

from app.models import Review

@reviews.route('/', methods=['GET'])
def index():
    """
    [GET] /reviews
    """
    return jsonify([i.to_dict() for i in Review.query.all()])

@reviews.route('/review/<int:id>', methods=['GET'])
def get_review(id):
    """
    [GET]
    """
    return jsonify(Review.query.get(id).to_dict())

@reviews.route('/create', methods=['POST'])
def create_review():
    """
    [POST] /reviews/create
    """
    data = request.get_json()
    review = Review()
    review.from_dict(data)
    review.create_review()
    response = jsonify(review.to_dict())
    response.status_code = 201
    response.headers['Location'] = url_for('reviews.get_review', id=review.id)
    return response


@reviews.route('/edit', methods=['PUT'])
def edit_review():
    """
    [PUT] /reviews/edit
    """
    return "ACCOUNT EDIT", 201


@reviews.route('/delete', methods=['POST'])
def delete_review():
    """
    [DELETE] /reviews/delete
    """
    return "ACCOUNT DELETE", 200
