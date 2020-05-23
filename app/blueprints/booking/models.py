from datetime import datetime

from app import db


class Booking(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String, )
    last_name = db.Column(db.String, )
    email = db.Column(db.String, )
    date = db.Column(db.DateTime)
    service_id = db.Column(db.Integer, db.ForeignKey('service.id'))

    def __repr__(self):
        return f'<Booking | {self.date}>'

# TODO Make Service class