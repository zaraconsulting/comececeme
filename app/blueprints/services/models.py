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
    title = db.Column(db.String, unique=True)
    price = db.Column(db.Float)
    time = db.Column(db.Integer)
    description = db.Column(db.String)
    created_on = db.Column(db.DateTime, default=datetime.utcnow())
    service_category_id = db.Column(db.Integer, db.ForeignKey('service_category.id'))

    def create_service(self):
        # self.service_category_id = ServiceCategory.query.filter_by(name=self.service_category_id).first().id
        db.session.add(self)
        db.session.commit()

    def delete_service(self):
        db.session.delete(self)
        db.session.commit()


    def to_dict(self):
        # print(self.service_category_id)
        data = {
            'id': self.id,
            'title': self.title,
            'price': self.price,
            'time': self.time,
            'description': self.description,
            'created_on': self.created_on,
            'category': {
                'id': self.service_category_id,
                'title': ServiceCategory.query.get(self.service_category_id).name
            },
        }
        return data

    def from_dict(self, data):
        for field in ['title', 'price', 'time', 'description', 'service_category_id']:
            # print(data['service_category'])
            if field in data:
                if field == 'service_category_id':
                    id_ = ServiceCategory.query.filter_by(name=data['service_category_id'].title()).first().id
                    setattr(self, field, id_)
                else:
                    setattr(self, field, data[field])

    def __str__(self):
        return self.title

    def __repr__(self):
        return f'<Review | {self.title}>'
