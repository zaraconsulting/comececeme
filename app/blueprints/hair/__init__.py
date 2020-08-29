from flask import Blueprint

bp = Blueprint('hair', __name__, url_prefix='/hair')

from .import routes