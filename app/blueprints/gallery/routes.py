from flask import render_template, redirect, url_for
from . import bp as gallery

@gallery.route('/')
def index():
    """
    [GET] /gallery
    """
    context = {}
    return render_template('gallery.html', **context)