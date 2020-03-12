import os
from dotenv import load_dotenv

load_dotenv(os.path.join(os.path.dirname(__name__), '.env'))

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY')
    SQLALCHEMY_DATABASE_URI = os.environ.get('SQLALCHEMY_DATABASE_URI')
    SQLALCHEMY_TRACK_MODIFICATIONS = os.environ.get('SQLALCHEMY_TRACK_MODIFICATIONS')
    BT_MERCHANT_ID = os.environ.get('BT_MERCHANT_ID')
    BT_PUBLIC_KEY = os.environ.get('BT_PUBLIC_KEY')
    BT_PRIVATE_KEY = os.environ.get('BT_PRIVATE_KEY')