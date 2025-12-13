# now try to put initial config of our application

class Config():
    DEBUG= False 
    SQLALCHEMY_TRACK_MODIFICATION= False 

class LocalDevelopermentConfig(Config):
    DEBUG=True  # some to say app.run(debug=True)
    SQLALCHEMY_DATABASE_URI= "sqlite:///jwtdb.sqlite3"
    JWT_SECRET_KEY= "this-is-secret-key"

# these two fns are basically helping us to retrieve the use information
# 1. first fn tell me which attribute should i retrieve for user information 
# 2. once the login is successful , through that we load that user and encripted
# where we loaded in case of jwt , these are loaded and return in form of token.


# secret key helps us to encrept the password
# flask login (based on session base authentication, both  flask security and jwt authentication are based on
# token base authentication)