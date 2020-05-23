from . import bp as main
from flask import request, jsonify, render_template

@main.route('/', methods=['GET'])
def index():
    """
    [GET] /
    """
    context = dict()
    return render_template('index.html'), 200

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
    [GET] /contact
    """
    return 'CONTACT', 201
