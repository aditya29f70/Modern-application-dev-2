from .database import db

class User(db.Model):
    id= db.Column(db.Integer, primary_key=True)
    username= db.Column(db.Text, nullable=False, unique=True)
    password= db.Column(db.Text, nullable=True)