from . import bp as main
from flask import request, jsonify

@main.route('/', methods=['GET'])
def index():
    """
    [GET] /
    """
    context = dict()
    return "HOME", 200

@main.route('/about', methods=['GET'])
def about():
    """
    [GET] /about
    """
    context = dict()
    return "ABOUT", 200

@main.route('/contact', methods=['GET'])
def contact():
    """
    [GET] /hair-tips
    """
    # data = request.get_json()
    return 'GET HAIR TIPS', 201
