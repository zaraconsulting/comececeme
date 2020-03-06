from server import db
from datetime import datetime

class HairTip(db.Model):
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
        return f'self.title[:15]...'