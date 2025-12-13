# we will make two route first one for login and second one for checking it's login crediencial

# note why we use .model import User bz we don't give that then it will search User in root directly '.' is making it's work easly to tell that model module is present in some directly


from flask import current_app as app, jsonify, request
from .model import User
from flask_jwt_extended import create_access_token, current_user, jwt_required
# jwt_required is kind of decorator which protect our endpoints
# instead of writing {"message": "valur"}, 401 --> we can directly provide the message --> jsonify("wrong user"), 401 --> can directly give the message or jsonify(message= ""), 401


@app.route("/login", methods=['POST'])
def login():
    username= request.json.get('username', None)
    password= request.json.get('password', None)

    user= User.query.filter_by(username= username).one_or_none()

    if not user or not user.password== password:
        return jsonify(message= 'incorrect username or password'), 401

# now if the user is that then try to make a takon using create_access_token , through that we first retrieve that user and try to encript that and then return 

    access_token= create_access_token(identity= user) # this basically a object wher this object is encrepated
    # here it is using identity fn which we defined in security.py (here we basically loading the uesr infor) and giving to that decorater to that we will use ti and returingg user.username to user_lookup_loader decorator


    # user (object) --> username (identity) --> User.query.filter_by(username= identity)
    return jsonify(access_token= access_token)



# now try to access another route and we also want that when change our page it should check do we have toke or not 

# now we have power to access you directly using current_user

# so if you are checking this route you have to also provide the taken so first run top code and get token and use it 
# to go dashboard

@app.route("/dashboard")
@jwt_required()
def protected():
    return jsonify(
        id=current_user.id,
        username= current_user.username,
        password= current_user.password
    )



# VVVVVVVVVVimpo 
# three things which have to remember
# 1. flask login: is used to secure you flask backend endpoint (for redirect or rendertemplate)
# 2. to protect apis ; for that you have option ; you can either use flask security or flask jwt
# when you use flask security your current_user stored in session but the token store in local storage only
# in case flask jwt ;; there is nothing store in session ;; and the token is stored in token