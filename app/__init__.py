from flask import Flask
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

db = SQLAlchemy()
migrate = Migrate(compare_type=True)


def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    db.init_app(app)
    migrate.init_app(app, db)

    with app.app_context():
        from app.blueprints.main import bp as main
        app.register_blueprint(main, url_prefix='/')

        from app.blueprints.shop import bp as shop
        app.register_blueprint(shop, url_prefix='/shop')

        from app.blueprints.account import bp as account
        app.register_blueprint(account, url_prefix='/account')

        from app.blueprints.faqs import bp as faqs
        app.register_blueprint(faqs, url_prefix='/faqs')

        from app.blueprints.booking import bp as booking
        app.register_blueprint(booking, url_prefix='/booking')

        from .braintree import gateway

    return app
