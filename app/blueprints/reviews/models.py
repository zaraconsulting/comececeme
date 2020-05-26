from app import db
from datetime import datetime


class Review(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    rating = db.Column(db.Integer)
    author = db.Column(db.String)
    body = db.Column(db.Text)
    created_on = db.Column(db.DateTime, default=datetime.utcnow())

    def get_rating(self):
        return self.rating

    def get_author(self):
        return self.author

    def get_body(self):
        return self.body

    def get_timestamp(self):
        return self.created_on

    def get_reviews(self):
        return self.query.all()

    def create_review(self):
        db.session.add(self)
        db.session.commit()

    def delete_review(self):
        db.session.delete(self)
        db.session.commit()

    def to_dict(self):
        data = {
            'id': self.id,
            'rating': self.rating,
            'author': self.author,
            'body': self.body,
            'created_on': self.created_on
        }
        return data

    def from_dict(self, data):
        for field in ['author', 'body', 'rating']:
            if field in data:
                setattr(self, field, data[field])

    def __str__(self):
        return self.body

    def __repr__(self):
        return f'<Review | {self.body}>'
