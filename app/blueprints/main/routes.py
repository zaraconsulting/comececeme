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
    return render_template('about-us.html'), 200

@main.route('/contact', methods=['GET'])
def contact():
    """
    [GET] /contact
    """
    context = {}
    return render_template('contact.html', **context), 201
