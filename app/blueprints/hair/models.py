from app import db

class Hair(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    pattern = db.Column(db.String)
    length = db.Column(db.Integer)
    price = db.Column(db.Float)
    category_id = db.Column(db.Integer, db.ForeignKey('hair_category_id'))

    def __repr__(self):
        return f"<Hair: {self.category}>"

class HairCategory(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    hair = db.relationship('Hair', backref='products', laxy='dynamic')

    def __repr__(self):
        return f"<HairCategory: {self.name}>"