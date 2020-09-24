from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

from app import db, login
from datetime import datetime


class Role(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True)
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

    def create_account(self):
        self.set_password_hash(self.password)
        db.session.add(self)
        db.session.commit()

    def delete_account(self):
        db.session.delete(self)
        db.session.commit()

    def set_password_hash(self, password):
        self.password = generate_password_hash(password)

    def check_password_hash(self, password):
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