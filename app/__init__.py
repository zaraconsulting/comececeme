from flask import Flask
import click, logging, os
from logging.handlers import SMTPHandler, RotatingFileHandler
from config import DevelopmentConfig, ProductionConfig, TestConfig
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_mail import Mail
from flask_login import LoginManager

db = SQLAlchemy()
migrate = Migrate(compare_type=True)
mail = Mail()
login = LoginManager()

def set_environment(app):
    if os.getenv('FLASK_ENV') == 'development':
        return DevelopmentConfig
    elif os.getenv('FLASK_ENV') == 'testing':
        return TestConfig
    else:
        return ProductionConfig

def create_app():
    app = Flask(__name__)

    app.config.from_object(set_environment(app))

    db.init_app(app)
    migrate.init_app(app, db)
    mail.init_app(app)
    login.init_app(app)

    login.login_view = 'authentication.login'
    login.login_message_category = 'm-warning'

    with app.app_context():
        from app.blueprints.main import bp as main
        app.register_blueprint(main, url_prefix='/')

        from app.blueprints.admin import bp as admin
        app.register_blueprint(admin)

        from app.blueprints.shop import bp as shop
        app.register_blueprint(shop, url_prefix='/shop')

        from app.blueprints.account import bp as account
        app.register_blueprint(account, url_prefix='/account')

        from app.blueprints.faqs import bp as faqs
        app.register_blueprint(faqs, url_prefix='/faqs')

        from app.blueprints.booking import bp as booking
        app.register_blueprint(booking, url_prefix='/booking')

        from app.blueprints.services import bp as services
        app.register_blueprint(services, url_prefix='/services')

        from app.blueprints.gallery import bp as gallery
        app.register_blueprint(gallery, url_prefix='/gallery')

        from app.blueprints.reviews import bp as reviews
        app.register_blueprint(reviews, url_prefix='/reviews')

        from app.blueprints.authentication import bp as authentication
        app.register_blueprint(authentication, url_prefix='/authentication')

        from app.blueprints.api import bp as api
        app.register_blueprint(api)

        from app.blueprints.hair import bp as hair
        app.register_blueprint(hair)

        from app.blueprints.products import bp as products
        app.register_blueprint(products)

        from app.blueprints.errors import errors
        app.register_blueprint(errors, url_prefix='/error')

        from .braintree import gateway
        from .import routes, models
        from .import tinypng
        from app.blueprints.admin import email

    # Email Error Logging
    if not app.debug:
        server = app.config.get('MAIL_SERVER')
        username = app.config.get('MAIL_USERNAME')
        port = app.config.get('MAIL_PORT')
        password = app.config.get('MAIL_PASSWORD')
        use_tls = app.config.get('MAIL_USE_TLS')
        admin = app.config.get('ADMIN')

        if server:
            auth = None
            if username or password:
                auth = (username, password)
            secure = None
            if use_tls:
                secure = ()
            mail_handler = SMTPHandler(mailhost=(server, port), fromaddr=f'noreply@{server}', toaddrs=admin, subject='ComeCeCeMe Failure', credentials=auth, secure=secure )
            mail_handler.setLevel(logging.ERROR)
            app.logger.addHandler(mail_handler)
        if not os.path.exists('logs'):
            os.mkdir('logs')
        file_handler = RotatingFileHandler('logs/comececeme-message_handlers.log', maxBytes=10240, backupCount=10)
        file_handler.setFormatter(logging.Formatter("%(asctime)s %(levelname)s: %(message)s [%(pathname)s:%(lineno)d]"))
        file_handler.setLevel(logging.INFO)
        app.logger.addHandler(file_handler)
        app.logger.setLevel(logging.INFO)
        app.logger.info('ComeCeCeMe startup')

    return app
