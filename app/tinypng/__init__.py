import tinify
from flask import current_app as app

tinify.key = app.config.get('TINYPNG_API')