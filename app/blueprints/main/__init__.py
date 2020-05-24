import click
import os
from flask import current_app
from flask import Blueprint
from flask.cli import with_appcontext

bp = Blueprint('main', __name__, cli_group=None)

from . import routes
