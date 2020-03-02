from . import bp as faqs
from flask import request, jsonify, url_for
from .models import HairTip
from server import db


@faqs.route('/hair-tips', methods=['GET'])
def get_hairtips():
    """
    [GET] /faqs/hair-tips
    """
    return jsonify([i.to_dict() for i in HairTip.query.all()]), 200


@faqs.route('/hair-tip/<int:id>', methods=['GET'])
def get_hairtip(id):
    """
    [GET] /faqs/hair-tip/<id>
    """
    return jsonify(HairTip.query.get_or_404(id).to_dict())


@faqs.route('/hair-tip/add', methods=['POST'])
def create_hairtip():
    """
    [POST] /faqs/hair-tip/add
    """
    data = request.get_json()
    tip = HairTip()
    tip.from_dict(data)
    tip.create_tip()
    response = jsonify(tip.to_dict())
    response.status_code = 201
    response.headers['Location'] = url_for('faqs.get_hairtip', id=tip.id)
    return response


@faqs.route('/hair-tip/<int:id>', methods=['PUT'])
def update_hairtip(id):
    """
    [PUT] /faqs/hair-tip/<id>
    """
    tip = HairTip.query.get_or_404(id)
    data = request.get_json() or {}
    tip.from_dict(data)
    db.session.commit()
    return jsonify(tip.to_dict())


@faqs.route('/hair-tip/<int:id>', methods=['DELETE'])
def delete_hairtip(id):
    """
    [DELETE] /faqs/hair-tip/<id>
    """
    tip = HairTip.query.get_or_404(id)
    tip.delete_tip()
    return jsonify({'message': f'HAIR TIP DELETED: {tip.title}'}), 201
