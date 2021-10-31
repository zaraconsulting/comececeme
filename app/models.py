from flask import current_app
from app import db, login
from datetime import datetime
from time import time
import jwt
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class Role(db.Model):
    __table_args__ = { 'extend_existing': True }
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True)
    rank = db.Column(db.Integer)
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
    __table_args__ = { 'extend_existing': True }
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

    def get_reset_password_token(self, expires_in=600):
        print(current_app.config.get('SECRET_KEY'))
        return jwt.encode({'reset_password': self.id, 'exp': time() + expires_in }, current_app.config.get('SECRET_KEY'), algorithm='HS256').decode('utf-8')

    @staticmethod
    def verify_reset_password_token(token):
        try:
            id = jwt.decode(token, current_app.config.get('SECRET_KEY'), algorithms=['HS256'])['reset_password']
        except:
            return
        return Account.query.get(id)

    def create_account(self):
        db.session.add(self)
        db.session.commit()

    def delete_account(self):
        db.session.delete(self)
        db.session.commit()

    def set_password(self, password):
        self.password = generate_password_hash(password)
        return self.password

    def check_password(self, password):
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


class Booking(db.Model):
    __table_args__ = { 'extend_existing': True }
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


class Faqs(db.Model):
    __table_args__ = { 'extend_existing': True }
    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String())
    answer = db.Column(db.String())
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

    def create_faq(self):
        db.session.add(self)
        db.session.commit()

    def delete_faq(self):
        db.session.delete(self)
        db.session.commit()

    def to_dict(self):
        data = {
            'id': self.id,
            'question': self.question,
            'answer': self.answer,
            'created_on': self.date_created
        }
        return data

    def from_dict(self, data):
        for field in ['question', 'answer']:
            if field in data:
                setattr(self, field, data[field])
    
    def __str__(self):
        return f"{self.question[:30]}..."

    def __repr__(self):
        return f'{self.question[:15]}...'
# TODO Make Service class


class HairTip(db.Model):
    __table_args__ = { 'extend_existing': True }
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    description = db.Column(db.Text)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

    def create_tip(self):
        db.session.add(self)
        db.session.commit()

    def delete_tip(self):
        db.session.delete(self)
        db.session.commit()

    def to_dict(self):
        data = {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'created_on': self.date_created
        }
        return data

    def from_dict(self, data):
        for field in ['title', 'description']:
            if field in data:
                setattr(self, field, data[field])
    
    def __str__(self):
        return f"{self.title[:30]}..."

    def __repr__(self):
        return f'{self.title[:15]}...'


class Gallery(db.Model):
    __table_args__ = { 'extend_existing': True }
    id = db.Column(db.Integer, primary_key=True)
    image_url = db.Column(db.String)
    created_on = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f'<Gallery: {self.image_url}>'


class Pattern(db.Model):
    __table_args__ = { 'extend_existing': True }
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    display_name = db.Column(db.String, default=name)
    image = db.Column(db.String)
    products = db.relationship('Hair', backref='patterns', lazy='dynamic')

    def to_dict(self):
        data = {
            'id': self.id,
            'name': self.display_name if self.display_name != self.name else self.name,
            'display_name': self.display_name,
            'image': self.image,
            'products': self.products
        }
        return data


    def from_dict(self, data):
        for field in ['name', 'image', 'display_name']:
            if field in data:
                setattr(self, field, data[field])

    def create_hair_pattern(self):
        db.session.add(self)
        db.session.commit()

    def delete_hair_pattern(self):
        db.session.delete(self)
        db.session.commit()

    def __str__(self) -> str:
        return f'Name: {self.name}'

    def __repr__(self):
        return f"<Pattern: {self.name}>"

class Cart(db.Model):
    __table_args__ = {'extend_existing': True}
    id = db.Column(db.Integer, primary_key=True)
    customerId = db.Column(db.Integer, db.ForeignKey('customer.id'), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('hair.id'), nullable=False)
    order_id = db.Column(db.Integer, db.ForeignKey('order.id'))

    def __repr__(self):
        return f"<Cart: {self.customerId}, {self.product_id}>"

class Hair(db.Model):
    __table_args__ = { 'extend_existing': True }
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    pattern = db.Column(db.String)
    length = db.Column(db.Integer)
    bundle_length = db.Column(db.String)
    image = db.Column(db.String)
    price = db.Column(db.Float)
    is_viewable = db.Column(db.Boolean, default=True)
    is_wig = db.Column(db.Boolean, default=True)
    pattern_id = db.Column(db.Integer, db.ForeignKey('pattern.id'))
    category_id = db.Column(db.Integer, db.ForeignKey('hair_category.id'))
    reviews = db.relationship('HairReview', backref='hair_reviews', lazy='dynamic')

    def to_dict(self):
        data = {
            'id': self.id,
            'is_viewable': self.is_viewable,
            'is_wig': self.is_wig,
            'name': self.name,
            'image': self.image,
            'length': self.length,
            'bundle_length': self.bundle_length,
            'price': self.price,
            'category_id': HairCategory.query.get(self.category_id).name,
            'pattern': Pattern.query.get(self.pattern_id),
            'category': HairCategory.query.get(self.category_id)
        }
        return data


    def from_dict(self, data):
        for field in ['pattern', 'name', 'image', 'length', 'price', 'category_id', 'bundle_length', 'is_viewable', 'is_wig']:
            if field in data:
                if field == 'category_id':
                    # If making a new wig first attribute
                    # print(data[field])
                    if HairCategory.query.get(data[field]).name == 'Wigs':
                        setattr(self, field, HairCategory.query.get(data[field]).id)
                    else:
                        # print(data[field])
                        category = HairCategory.query.get(data[field])
                        if category is not None:
                            setattr(self, field, category.id)
                else:
                    setattr(self, field, data[field])

    def create_hair_product(self):
        db.session.add(self)
        db.session.commit()

    def delete_hair_product(self):
        db.session.delete(self)
        db.session.commit()

    def __str__(self) -> str:
        return f'Pattern: {self.pattern}\Length: {self.length}\Price: {self.price}'

    def __repr__(self):
        return f'<Hair: {self.pattern}\Length: {self.length}\Price: {self.price}>'


class HairReview(db.Model):
    __table_args__ = { 'extend_existing': True }
    id = db.Column(db.Integer, primary_key=True)
    author = db.Column(db.String)
    email = db.Column(db.String)
    body = db.Column(db.Text)
    rating = db.Column(db.Integer)
    created_on = db.Column(db.DateTime, default=datetime.utcnow)
    hair_id = db.Column(db.Integer, db.ForeignKey('hair.id'))

    def create_hair_review(self):
        db.session.add(self)
        db.session.commit()

    def delete_hair_review(self):
        db.session.delete(self)
        db.session.commit()

    def to_dict(self):
        data = {
            'author': self.author,
            'email': self.email,
            'rating': self.rating,
            'body': self.body,
            'created_on': self.created_on,
            'hair_id': self.hair_id
        }
        return data

    def from_dict(self, data):
        for field in ['author', 'email', 'rating', 'body', 'hair_id']:
            if field in data:
                setattr(self, field, data[field])

    def __str__(self):
        return f"Author: {self.author} | Rating: {self.rating}"


class HairCategory(db.Model):
    __table_args__ = { 'extend_existing': True }
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    display_name = db.Column(db.String)
    image = db.Column(db.String)
    description = db.Column(db.String)
    products = db.relationship('Hair', backref='category', lazy='dynamic')

    def to_dict(self):
        data = {
            'id': self.id,
            'name': self.display_name if self.display_name is not None else self.name,
            'description': self.description,
            'image': self.image,
            'products': [i.to_dict() for i in self.products.all()]
        }
        return data


    def from_dict(self, data):
        for field in ['name', 'display_name', 'description', 'image']:
            if field in data:
                setattr(self, field, data[field])

    def create_hair_category(self):
        db.session.add(self)
        db.session.commit()

    def delete_hair_category(self):
        db.session.delete(self)
        db.session.commit()

    def __str__(self) -> str:
        return f'Name: {self.name}'

    def __repr__(self):
        return f"<HairCategory: {self.name}>"


class Review(db.Model):
    __table_args__ = { 'extend_existing': True }
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


class ServiceCategory(db.Model):
    __table_args__ = { 'extend_existing': True }
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    tag = db.Column(db.String)
    description = db.Column(db.String)
    services = db.relationship('Service', backref='services', lazy='dynamic')

    def create_service_category(self):
        db.session.add(self)
        db.session.commit()

    def to_dict(self):
        data = {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'tag': self.tag
        }
        return data

    def from_dict(self, data):
        for field in ['name', 'tag', 'description']:
            if field in data:
                setattr(self, field, data[field])

    def __str__(self):
        return self.name

    def __repr__(self):
        return f'<Review | {self.name}>'


class Service(db.Model):
    __table_args__ = { 'extend_existing': True }
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
        return f'<Service | {self.title}>'


class Customer(UserMixin, db.Model):
    __table_args__ = {'extend_existing': True}
    id = db.Column(db.Integer, primary_key=True)
    suffix = db.Column(db.String)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    phone = db.Column(db.String)
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
    is_customer = db.Column(db.Boolean, default=True)

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
def load_custommer(id):
    return Customer.query.get(int(id)) or Account.query.get(int(id))


class Product(db.Model):
    __table_args__ = { 'extend_existing': True }
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
    __table_args__ = { 'extend_existing': True }
    id = db.Column(db.Integer, primary_key=True)
    order_date = db.Column(db.DateTime, default=datetime.utcnow)
    customer_id = db.Column(db.Integer, db.ForeignKey('customer.id'))
    coupon_id = db.Column(db.Integer, db.ForeignKey('coupon.id'))
    product_id = db.Column(db.Integer, db.ForeignKey('hair.id'))

    def create_order(self):
        db.session.add(self)
        db.session.commit()

    def delete_order(self):
        db.session.delete(self)
        db.session.commit()

    def to_dict(self):
        c = Customer.query.get(self.customer_id)
        data = {
            'order_id': self.id,
            'c_last_name': c.last_name,
            'c_first_name': c.first_name,
            'c_email': c.email,
            'coupon': Coupon.query.get(self.coupon_id),
            'product_id': self.product_id,
            'order_date': datetime.strftime(self.order_date, '%Y-%m-%d'),
        }
        return data

    def from_dict(self, data):
        for field in ['customer_id', 'cart_id', 'product_id']:
            if field in data:
                setattr(self, field, data[field])

    def __str__(self):
        return f"OrderID: {self.id} | CustomerID: {self.customer_id}"


class ProductReview(db.Model):
    __table_args__ = { 'extend_existing': True }
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

class Coupon(db.Model):
    __table_args__ = { 'extend_existing': True }
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String)
    discount = db.Column(db.Float)
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
            'discount': self.discount,
            'date_created': self.date_created,
        }
        return data

    def from_dict(self, data):
        for field in ['text', 'discount']:
            if field in data:
                if field == 'text':
                    setattr(self, field, data[field].upper())
                else:
                    setattr(self, field, data[field])

    def get_text(self):
        return self.text

    def get_discount(self):
        return self.discount

    def __str__(self):
        return f"{self.text} | {self.discount}"


class Category(db.Model):
    __table_args__ = { 'extend_existing': True }
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
