from app import db
from datetime import datetime

class Pattern(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    image = db.Column(db.String)
    products = db.relationship('Hair', backref='patterns', lazy='dynamic')

    def to_dict(self):
        data = {
            'id': self.id,
            'name': self.name,
            'image': self.image,
            'products': [i.to_dict() for i in self.products.all()]
        }
        return data


    def from_dict(self, data):
        for field in ['name', 'image']:
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
    id = db.Column(db.Integer, primary_key=True)
    pattern = db.Column(db.String)
    length = db.Column(db.Integer)
    bundle_length = db.Column(db.String)
    price = db.Column(db.Float)
    pattern_id = db.Column(db.Integer, db.ForeignKey('pattern.id'))
    category_id = db.Column(db.Integer, db.ForeignKey('hair_category.id'))
    reviews = db.relationship('HairReview', backref='hair_reviews', lazy='dynamic')

    def to_dict(self):
        data = {
            'id': self.id,
            'pattern': self.pattern,
            'length': self.length,
            'bundle_length': self.bundle_length,
            'price': self.price,
            'category_id': HairCategory.query.get(self.category_id).name,
        }
        return data


    def from_dict(self, data):
        for field in ['pattern', 'length', 'price', 'category_id', 'bundle_length']:
            if field in data:
                if field == 'category_id':
                    category = HairCategory.query.filter_by(name=data[field].title()).first()
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
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    image = db.Column(db.String)
    description = db.Column(db.String)
    products = db.relationship('Hair', backref='category', lazy='dynamic')

    def to_dict(self):
        data = {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'image': self.image,
            'products': [i.to_dict() for i in self.products.all()]
        }
        return data


    def from_dict(self, data):
        for field in ['name', 'description', 'image']:
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