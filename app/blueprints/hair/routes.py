from flask import render_template, redirect, url_for
from .import bp as app

@app.route('/', methods=['GET'])
def index():
    pass