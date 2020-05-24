from flask import render_template, redirect, url_for
from . import bp as services

@services.route('/')
def index():
    """
    [GET] /services
    """
    context = {}
    return render_template('services.html', **context)