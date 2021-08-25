import os
from dotenv import load_dotenv

load_dotenv(os.path.join(os.path.dirname(__name__), '.env'))

class BaseConfig:
    FLASK_APP = os.environ.get('FLASK_APP')
    FLASK_ENV = os.environ.get('FLASK_ENV')
    SECRET_KEY = os.environ.get('SECRET_KEY')
    SQLALCHEMY_TRACK_MODIFICATIONS = os.environ.get('SQLALCHEMY_TRACK_MODIFICATIONS')
    BT_MERCHANT_ID = os.environ.get('BT_MERCHANT_ID')
    BT_MERCHANT_ACCOUNT_ID = os.environ.get('BT_MERCHANT_ACCOUNT_ID')
    BT_PUBLIC_KEY = os.environ.get('BT_PUBLIC_KEY')
    BT_PRIVATE_KEY = os.environ.get('BT_PRIVATE_KEY')
    CLIENT_EMAIL = os.environ.get('CLIENT_EMAIL')
    MAIL_SERVER = os.environ.get('MAIL_SERVER')
    MAIL_PORT = os.environ.get('MAIL_PORT')
    MAIL_USE_TLS = os.environ.get('MAIL_USE_TLS')
    MAIL_USERNAME = os.environ.get('MAIL_USERNAME')
    MAIL_PASSWORD = os.environ.get('MAIL_PASSWORD')
    PRODUCTS_PER_PAGE = int(os.environ.get('PRODUCTS_PER_PAGE'))
    CLOUDINARY_CLOUD_NAME = os.environ.get('CLOUDINARY_CLOUD_NAME')
    CLOUDINARY_API_KEY = os.environ.get('CLOUDINARY_API_KEY')
    CLOUDINARY_API_SECRET = os.environ.get('CLOUDINARY_API_SECRET')
    CLOUDINARY_URL = os.environ.get('CLOUDINARY_URL')
    MAILCHIMP_API_HEADER = os.environ.get('MAILCHIMP_API_HEADER')
    MAILCHIMP_URL = os.environ.get('MAILCHIMP_URL')
    MAILCHIMP_MAIL_ID = os.environ.get('MAILCHIMP_MAIL_ID')
    MAILCHIMP_USERNAME = os.environ.get('MAILCHIMP_USERNAME')
    MAILCHIMP_API_KEY = os.environ.get('MAILCHIMP_API_KEY')
    ADMIN = os.environ.get('ADMIN')
    SB_CLIENT_ID = os.environ.get('SB_CLIENT_ID')
    SB_SECRET = os.environ.get('SB_SECRET')
    SB_ACCESS_TOKEN = os.environ.get('SB_ACCESS_TOKEN')
    DEVELOPER_NAME = os.environ.get('DEVELOPER_NAME')
    DEVELOPER_URL = os.environ.get('DEVELOPER_URL')


class DevelopmentConfig(BaseConfig):
    SQLALCHEMY_DATABASE_URI = os.environ.get('DEVELOPMENT_DATABASE')


class ProductionConfig(BaseConfig):
    SQLALCHEMY_DATABASE_URI = os.environ.get('PRODUCTION_DATABASE')


class TestConfig(BaseConfig):
    SQLALCHEMY_DATABASE_URI = os.environ.get('TEST_DATABASE')
    
