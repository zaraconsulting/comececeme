from app import create_app, cli, db
from app.cli import blueprint
from app.blueprints.main.models import HairTip

app = create_app()
app.cli.add_command(blueprint)

@app.shell_context_processor
def makeShellContext():
    return dict(db=db, app=app, HairTip=HairTip)