from werkzeug.security import check_password_hash, generate_password_hash

from app import db, login
from datetime import datetime
from flask import jsonify, session
from flask_login import UserMixin

from app.blueprints.account.models import Account


class Customer(UserMixin, db.Model):
    # extend_existing=True
    id = db.Column(db.Integer, primary_key=True)
    suffix = db.Column(db.String)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    phone = db.Column(db.BigInteger)
    email = db.Column(db.String, nullable=False, unique=True)
    password = db.Column(db.String(124), nullable=False)
    dob = db.Column(db.String)
    address_1 = db.Column(db.String)
    address_2 = db.Column(db.String)
    city = db.Column(db.String)
    state = db.Column(db.String)
    _zip = db.Column(db.Integer)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)
    orders = db.relationship('Order', backref="orders", lazy='dynamic')
    cart = db.relationship('Cart', backref='cart', lazy='dynamic')

    def create_customer(self):
        self.password = generate_password_hash(self.password)
        db.session.add(self)
        db.session.commit()

    def delete_customer(self):
        db.session.delete(self)
        db.session.commit()

    def check_password_hash(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        data = {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'email': self.email,
            'password': '<hidden_password>',
            'dob': self.dob,
            # 'orders': self.orders,
            'address_1': self.address_1,
            'address_2': self.address_2,
            'city': self.city,
            'state': self.state,
            'zip': self.zip
        }
        return data

    def from_dict(self, data):
        for field in ['id', 'first_name', 'last_name', 'email', 'password']:
            if field in data:
                setattr(self, field, data[field])

    def __str__(self):
        return f"{self.email} | {self.first_name} {self.last_name}"

    def __repr__(self):
        return f"{self.email} | {self.first_name} {self.last_name}"


@login.user_loader
def load_user(id):
    return Customer.query.get(int(id))


class Cart(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    customerId = db.Column(db.Integer, db.ForeignKey('customer.id'), nullable=False)
    productId = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=False)
    order_id = db.Column(db.Integer, db.ForeignKey('order.id'))

    def __repr__(self):
        return f"<Cart: {self.customerId}, {self.productId}>"


class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False, unique=True)
    image = db.Column(db.String, default='http://via.placeholder.com/500x500', nullable=False)
    description = db.Column(db.Text, nullable=False, default="Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus.")
    price = db.Column(db.Float, nullable=False)
    length = db.Column(db.Integer)
    rating = db.Column(db.Integer, nullable=True)
    quantity = db.Column(db.Integer)
    in_stock = db.Column(db.Boolean, default=True)
    discount = db.Column(db.Boolean, default=False)
    discount_price = db.Column(db.Float)
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'))
    created_on = db.Column(db.DateTime, default=datetime.utcnow)
    reviews = db.relationship('ProductReview', backref='product_reviews', lazy='dynamic')

    def to_dict(self):
        data = {
            'id': self.id,
            'category': Category.query.get(self.category_id).name,
            'name': self.name,
            'image': self.image,
            'description': self.description,
            'price': self.price,
            'quantity': self.quantity,
            'in_stock': self.in_stock,
            'created_on': self.created_on,
            'reviews': [i.to_dict() for i in self.reviews.all()]
        }
        return data


    def from_dict(self, data):
        for field in ['name', 'price', 'description', 'category_id', 'quantity', 'in_stock']:
            if field in data:
                if field == 'category_id':
                    category = Category.query.filter_by(name=data[field]).first()
                    if category is not None:
                        setattr(self, field, category.id)
                else:
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
    # coupon_id = db.Column(db.Integer, db.ForeignKey('coupon.id'))
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'))

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
            'product_id': self.product_id,
            'order_date': self.order_date,
        }
        return data

    def from_dict(self, data):
        for field in ['customer_id', 'cart_id', 'product_id']:
            if field in data:
                setattr(self, field, data[field])

    def __str__(self):
        return f"OrderID: {self.id} | CustomerID: {self.customer_id}"


class ProductReview(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    author = db.Column(db.String)
    email = db.Column(db.String)
    body = db.Column(db.Text)
    rating = db.Column(db.Integer)
    created_on = db.Column(db.DateTime, default=datetime.utcnow)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'))

    def create_product_review(self):
        db.session.add(self)
        db.session.commit()

    def delete_product_review(self):
        db.session.delete(self)
        db.session.commit()

    def to_dict(self):
        data = {
            'author': self.author,
            'email': self.email,
            'rating': self.rating,
            'body': self.body,
            'created_on': self.created_on,
            'product_id': self.product_id
        }
        return data

    def from_dict(self, data):
        for field in ['author', 'email', 'rating', 'body', 'product_id']:
            if field in data:
                setattr(self, field, data[field])

    def __str__(self):
        return f"Author: {self.author} | Rating: {self.rating}"

# class Coupon(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     text = db.Column(db.String, nullable=False)
#     percentage = db.Column(db.Float)
#     date_created = db.Column(db.DateTime, default=datetime.utcnow)

#     def create_coupon(self):
#         db.session.add(self)
#         db.session.commit()

#     def delete_coupon(self):
#         db.session.delete(self)
#         db.session.commit()

#     def to_dict(self):
#         data = {
#             'text': self.text,
#             'percentage': self.percentage,
#             'date_created': self.date_created,
#         }
#         return data

#     def from_dict(self, data):
#         for field in ['text', 'percentage']:
#             if field in data:
#                 setattr(self, field, data[field])

#     def get_text(self):
#         return self.text

#     def get_percentage(self):
#         return self.percentage

#     def __str__(self):
#         return f"{self.text} | {self.percentage}"


class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    image = db.Column(db.String)

    def create_category(self):
        db.session.add(self)
        db.session.commit()

    def delete_category(self):
        db.session.delete(self)
        db.session.commit()

    def to_dict(self):
        data = {
            'id': self.id,
            'name': self.name,
        }
        return data

    def from_dict(self, data):
        for field in ['name', 'image']:
            if field in data:
                setattr(self, field, data[field])

    def get_name(self):
        return {self.name}

    def __str__(self):
        return f"{self.name}"


# class CartItem(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String)
#     image = db.Column(db.String)
#     price = db.Column(db.Float)
#     rating = db.Column(db.Integer)

#     def create_cart_item(self):
#         db.session.add(self)
#         db.session.commit()
        
#     def delete_cart_item(self):
#         db.session.delete(self)
#         db.session.commit()

#     def to_dict(self):
#         data = {
#             'id': self.id,
#             'name': self.name,
#             'image': self.image,
#             'price': self.price,
#             'rating': self.rating,
#         }
#         return data

#     def from_dict(self, data):
#         for field in ['name', 'image', 'price', 'rating']:
#             if field in data:
#                 setattr(self, field, data[field])

#     def __str__(self):
#         return f"{self.name}"

#     def __repr__(self):
#         return f"<CartItem: {self.name}>"
