from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

from app import db, login
from datetime import datetime
from time import time
import jwt

from flask import current_app

class Role(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True)
    rank = db.Column(db.Integer)
    accounts = db.relationship('Account', backref='role', lazy='dynamic')

    def __repr__(self):
        return f'<Role | {self.name}>'

    def getName(self):
        return self.name

    def getAccounts(self):
        return self.query.all()

    def create_role(self):
        db.session.add(self)
        db.session.commit()

    def delete_role(self):
        db.session.delete(self)
        db.session.commit()

    def to_dict(self):
        data = {
            'name': self.name,
            'accounts': self.accounts.users.all(),
        }
        return data

    def from_dict(self, data):
        for field in ['name']:
            if field in data:
                if field == 'name':
                    setattr(self, field, data[field].title())
                else:
                    setattr(self, field, data[field])

    def __str__(self):
        return self.name


class Account(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    email = db.Column(db.String, unique=True)
    password = db.Column(db.String)
    is_customer = db.Column(db.Boolean, default=False)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)
    role_id = db.Column(db.Integer, db.ForeignKey('role.id'))
    is_admin = db.Column(db.Boolean, default=0)
    # role_id = db.Column(db.Integer, db.ForeignKey('role.id'), default=Role.query.filter_by(name='User').first())

    def get_reset_password_token(self, expires_in=600):
        print(current_app.config.get('SECRET_KEY'))
        return jwt.encode({'reset_password': self.id, 'exp': time() + expires_in }, current_app.config.get('SECRET_KEY'), algorithm='HS256').decode('utf-8')

    @staticmethod
    def verify_reset_password_token(token):
        try:
            id = jwt.decode(token, current_app.config.get('SECRET_KEY'), algorithms=['HS256'])['reset_password']
        except:
            return
        return Account.query.get(id)

    def create_account(self):
        db.session.add(self)
        db.session.commit()

    def delete_account(self):
        db.session.delete(self)
        db.session.commit()

    def set_password(self, password):
        self.password = generate_password_hash(password)
        return self.password

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        data = {
            'email': self.email,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'password': self.password,
            'date_created': self.date_created
        }
        return data

    def from_dict(self, data):
        for field in ['first_name', 'last_name', 'email', 'password']:
            if field in data:
                setattr(self, field, data[field])

    def __str__(self):
        return self.email

    def __repr__(self):
        return self.email