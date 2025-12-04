# you have to install flask_jwt_extended

from flask_jwt_extended import JWTManager
from .model import User

# JWTManger help use to create jwt object which  itself gives us some functiinality 
# now try to create jwt object

jwt= JWTManager()

# we try to use call back fn (they are created using decorateer )

@jwt.user_identity_loader
def load(user):
    return user.username # this what identity gonna store to themself then use in below 

@jwt.user_lookup_loader
def user_lookup(_jwt_header, jwt_data):
    identity= jwt_data["sub"]
    return User.query.filter_by(username= identity).one_or_none()

## what exactly these fn doing;;
# you know about current_user --> where we try to encript a user info like it's id, username, password and try to store
# in session so we can directly access those in any page and this encriptioin is happening by using this JWT_scret_key
# what is problem with that --> session is accessible through browser so that why use token but infos are encripted form

