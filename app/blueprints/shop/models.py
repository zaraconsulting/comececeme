from werkzeug.security import check_password_hash

from app import db
from datetime import datetime

from app.blueprints.account.models import Account


class Customer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    suffix = db.Column(db.String)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    phone = db.Column(db.BigInteger)
    email = db.Column(db.String, nullable=False)
    password = db.Column(db.String(124), nullable=False)
    dob = db.Column(db.String)
    address_1 = db.Column(db.String)
    address_2 = db.Column(db.String)
    city = db.Column(db.String)
    state = db.Column(db.String)
    zip = db.Column(db.Integer)
    orders = db.relationship('Order', backref="order")
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

    def create_customer(self):
        account = Account.query.filter_by(email=self.email).first()
        if account is not None:
            if account.check_password_hash(self.password) and self.email == account.email:
                self.password = account.password
                self.email = account.email
                db.session.add(self)
                db.session.commit()

    def delete_customer(self):
        db.session.delete(self)
        db.session.commit()

    def check_password_hash(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        data = {
            'first_name': self.first_name,
            'last_name': self.last_name,
            'email': self.email,
            # 'password': '<hidden_password>',
            'dob': self.dob,
            'orders': self.orders,
            'address_1': self.address_1,
            'address_2': self.address_2,
            'city': self.city,
            'state': self.state,
            'zip': self.zip
        }
        return data

    def from_dict(self, data):
        for field in ['email', 'password']:
            if field in data:
                setattr(self, field, data[field])

    def __str__(self):
        return f"{self.email} | {self.first_name} {self.last_name}"

    def __repr__(self):
        return f"{self.email} | {self.first_name} {self.last_name}"


class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    image = db.Column(db.String, default='http://via.placeholder.com/300x388', nullable=False)
    description = db.Column(db.Text, nullable=False,
                            default="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.")
    price = db.Column(db.Float, nullable=False)
    rating = db.Column(db.Float, nullable=True)
    quantity = db.Column(db.Integer)
    discount = db.Column(db.Boolean, default=False)
    discount_price = db.Column(db.Float)
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'))
    created_on = db.Column(db.DateTime, default=datetime.utcnow)
    order_id = db.Column(db.Integer, db.ForeignKey('order.id'))

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


class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    order_date = db.Column(db.DateTime, default=datetime.utcnow)
    customer_id = db.Column(db.Integer, db.ForeignKey('customer.id'))
    coupon_id = db.Column(db.Integer, db.ForeignKey('coupon.id'))
    products = db.relationship('Product', backref='product', lazy='dynamic')

    def create_order(self):
        db.session.add(self)
        db.session.commit()

    def delete_order(self):
        db.session.delete(self)
        db.session.commit()

    def to_dict(self):
        data = {
            'order_id': self.id,
            'customer_id': self.customer_id,
            'order_date': self.order_date
        }
        return data

    def from_dict(self, data):
        for field in ['order_id', 'customer_id']:
            if field in data:
                setattr(self, field, data[field])

    def __str__(self):
        return f"OrderID: {self.id} | CustomerID: {self.customer_id}"


class Coupon(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String, nullable=False)
    percentage = db.Column(db.Float)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

    def create_coupon(self):
        db.session.add(self)
        db.session.commit()

    def delete_coupon(self):
        db.session.delete(self)
        db.session.commit()

    def to_dict(self):
        data = {
            'text': self.text,
            'percentage': self.percentage,
            'date_created': self.date_created,
        }
        return data

    def from_dict(self, data):
        for field in ['text', 'percentage']:
            if field in data:
                setattr(self, field, data[field])

    def get_text(self):
        return self.text

    def get_percentage(self):
        return self.percentage

    def __str__(self):
        return f"{self.text} | {self.percentage}"


class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)

    def create_category(self):
        db.session.add(self)
        db.session.commit()

    def delete_category(self):
        db.session.delete(self)
        db.session.commit()

    def to_dict(self):
        data = {
            'name': self.name,
        }
        return data

    def from_dict(self, data):
        for field in ['name']:
            if field in data:
                setattr(self, field, data[field])

    def get_name(self):
        return {self.name}

    def __str__(self):
        return f"{self.name}"
