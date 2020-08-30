from app import db

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

class Hair(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    pattern = db.Column(db.String)
    length = db.Column(db.Integer)
    price = db.Column(db.Float)
    pattern_id = db.Column(db.Integer, db.ForeignKey('pattern.id'))
    category_id = db.Column(db.Integer, db.ForeignKey('hair_category.id'))

    def to_dict(self):
        data = {
            'id': self.id,
            'pattern': self.pattern,
            'length': self.length,
            'price': self.price,
            'category_id': HairCategory.query.get(self.category_id).name,
        }
        return data


    def from_dict(self, data):
        for field in ['pattern', 'length', 'price', 'category_id']:
            if field in data:
                if field == 'category_id':
                    category = HairCategory.query.filter_by(name=data[field]).first()
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