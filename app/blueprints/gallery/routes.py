from flask import render_template, redirect, url_for
from . import bp as gallery
from .models import Gallery

@gallery.route('/')
def index():
    """
    [GET] /gallery
    """
    context = dict(gallery=Gallery.query.all())
    return render_template('gallery.html', **context)