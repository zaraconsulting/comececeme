from . import bp as faqs
from flask import request, jsonify
from .models import HairTip

@faqs.route('/hair-tips', methods=['GET'])
def hair_tips():
    """
    [GET] /faqs/hair-tips
    """
    return jsonify({'tips': [dict(title=i.title, description=i.description) for i in HairTip.query.all()]}), 201

@faqs.route('/hair-tips/add', methods=['POST'])
def hair_tips_add():
    """
    [GET] /faqs/hair-tips/add
    """
    return "FAQS HAIR-TIPS", 200

