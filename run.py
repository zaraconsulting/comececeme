from app import create_app, db, cli
from flask import current_app

from app.blueprints.reviews.models import Review

app = create_app()
cli.register(app)

@app.shell_context_processor
def make_context():
    return dict(db=db, Review=Review)
