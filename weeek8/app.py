from flask import Flask
from application.config import LocalDevelopermentConfig
from application.database import db 
from application.model import User 
from application.security import jwt


def create_app():
    app= Flask(__name__)
    app.config.from_object(LocalDevelopermentConfig)
    db.init_app(app)
    jwt.init_app(app)
    app.app_context().push()

    return app

app= create_app()

# now import all the routes

from application.routes import *

if __name__== "__main__":
    db.create_all()

    # run this only once

    # user1= User(username= 'user01', password='12345')
    # db.session.add(user1)
    # user2= User(username= 'user02', password='12345')
    # db.session.add(user2)
    # db.session.commit()
    app.run()



