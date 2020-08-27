from flask import Blueprint

bp = Blueprint(__name__, 'hair', url_prefix='/hair')

from .import routes