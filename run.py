from app import create_app
from flask import current_app

app = create_app()

@app.shell_context_processor
def make_context():
    return dict()