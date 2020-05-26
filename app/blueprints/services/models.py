from app import db
from datetime import datetime


class ServiceCategory(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    services = db.relationship('Service', backref='services', lazy='dynamic')

    def create_service_category(self):
        db.session.add(self)
        db.session.commit()

    def to_dict(self):
        data = {
            'id': self.id,
            'name': self.name,
        }
        return data

    def from_dict(self, data):
        for field in ['name']:
            if field in data:
                setattr(self, field, data[field])

    def __str__(self):
        return self.name

    def __repr__(self):
        return f'<Review | {self.name}>'


class Service(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    description = db.Column(db.String)
    created_on = db.Column(db.DateTime, default=datetime.utcnow())
    service_category_id = db.Column(db.Integer, db.ForeignKey('service_category.id'))

    def create_service(self):
        db.session.add(self)
        db.session.commit()

    def delete_service(self):
        db.session.delete(self)
        db.session.commit()

    def to_dict(self):
        data = {
            'author': self.author,
            'body': self.body,
            'created_on': self.created_on
        }
        return data

    def from_dict(self, data):
        for field in ['author', 'body']:
            if field in data:
                setattr(self, field, data[field])

    def __str__(self):
        return self.body

    def __repr__(self):
        return f'<Review | {self.body}>'
