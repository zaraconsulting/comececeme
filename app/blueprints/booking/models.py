from datetime import datetime

from app import db


class Booking(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False)
    phone = db.Column(db.String, nullable=False)
    date = db.Column(db.DateTime, nullable=False)
    note = db.Column(db.Text)
    service_id = db.Column(db.Integer, db.ForeignKey('service.id'))
    service_cat = db.Column(db.Integer, db.ForeignKey('service_category.id'))

    def __repr__(self):
        return f'<Booking | {self.name}, {self.email}, {self.phone}, {self.date}, {self.note}>'

# TODO Make Service class