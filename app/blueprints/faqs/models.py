from app import db
from datetime import datetime

class HairTip(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    description = db.Column(db.Text)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

    def __str__(self):
        return f"{self.title[:30]}..."