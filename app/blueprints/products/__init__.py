from flask import Blueprint

bp = Blueprint('products', __name__, url_prefix='/products')

from .import routes