from werkzeug.security import generate_password_hash, check_password_hash

from app import db
from datetime import datetime


class Role(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True)
    accounts = db.relationship('Account', backref='user', lazy='dynamic')

    def __repr__(self):
        return f'<Role | {self.name}>'

    def getName(self):
        return self.name

    def getAccounts(self):
        return self.query.all()


class Account(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String, nullable=False, unique=True)
    password = db.Column(db.String, nullable=False)
    is_customer = db.Column(db.Boolean, default=False)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)
    role_id = db.Column(db.Integer, db.ForeignKey('role.id'))
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
            'password': self.password,
            'date_created': self.date_created
        }
        return data

    def from_dict(self, data):
        for field in ['email', 'password']:
            if field in data:
                setattr(self, field, data[field])

    def __str__(self):
        return self.email

    def __repr__(self):
        return self.email
