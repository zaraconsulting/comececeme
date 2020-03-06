from server import create_app, cli, db
from server.cli import blueprint
from server.blueprints.account.models import Account
from server.blueprints.faqs.models import HairTip
from server.blueprints.shop.models import Product, Customer

app = create_app()
app.cli.add_command(blueprint)


@app.shell_context_processor
def makeShellContext():
    return dict(db=db, app=app, HairTip=HairTip, Product=Product, Account=Account, Customer=Customer)
