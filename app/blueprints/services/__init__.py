from flask import Blueprint

bp = Blueprint('services', __name__)

from .import routes