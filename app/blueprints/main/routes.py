from . import bp as main
from flask import request, jsonify, render_template, url_for, redirect
import json

from app.blueprints.reviews.models import Review
from app.email import send_booking_email


@main.route('/', methods=['GET'])
def index():
    """
    [GET] /
    """
    context = dict(reviews=Review.query.all())
    return render_template('index.html', **context), 200

@main.route('/about', methods=['GET'])
def about():
    """
    [GET] /about
    """
    context = dict()
    return render_template('about-us.html'), 200

@main.route('/contact', methods=['GET', 'POST'])
def contact():
    """
    [GET] /contact
    [POST] /contact
    """
    if request.method == 'POST':
        data = request.form.to_dict()
        send_booking_email(data)
        return json.dumps({'success': True}), 200, {'ContentType': 'application/json'}
        return redirect(url_for('main.contact'))
    context = {}
    return render_template('contact.html', **context), 201

# @main.route('/contact', methods=['POST'])
# def contact_send():
#     """
#     [POST] /contact
#     """
#     return redirect(url_for('main.contact')), 201
