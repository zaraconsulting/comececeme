from server import db
from datetime import datetime


class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    image = db.Column(db.String, default='http://via.placeholder.com/300x388', nullable=False)
    description = db.Column(db.Text, nullable=False, default="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.")
    price = db.Column(db.Float, nullable=False)
    rating = db.Column(db.Float, nullable=True)
    created_on = db.Column(db.DateTime, default=datetime.utcnow())

    def to_dict(self):
        data = {
            'id': self.id,
            'name': self.name,
            'image': self.image,
            'description': self.description,
            'price': self.price,
            'rating': self.rating,
            'created_on': self.created_on
        }
        return data

    def from_dict(self, data):
        for field in ['name', 'price']:
            if field in data:
                setattr(self, field, data[field])

    def create_product(self):
        db.session.add(self)
        db.session.commit()

    def delete_product(self):
        db.session.add(self)
        db.session.commit()

    def __str__(self) -> str:
        return f'Name: {self.name}\nPrice: {self.price}\nRating: {self.rating}'
