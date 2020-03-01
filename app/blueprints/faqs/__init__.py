from flask import Blueprint

bp = Blueprint('faqs', __name__)

from . import routes, models