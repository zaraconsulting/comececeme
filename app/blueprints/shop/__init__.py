from flask import Blueprint

bp = Blueprint('shop', __name__)

from . import routes