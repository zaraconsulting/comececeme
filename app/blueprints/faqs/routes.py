from . import bp as faqs
from flask import request, jsonify

@faqs.route('/hair-tips', methods=['GET'])
def hair_tips():
    """
    [GET] /faqs/hair-tips
    """
    return "FAQS HAIR-TIPS", 200