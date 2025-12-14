from flask import Flask, request

# webhooks_reciever is nothing but a end point that can recieve some data 

app= Flask(__name__)

@app.route("/webhook_reciever", methods=['POST']) ## typically POST or GET
def webhook_reciever():  # how do we get json request body data if someone is sending a json request at this url --> using request.get_json()

    data= request.get_json()

    # do some preprocessing with data ,eg: send email
    ## one good thing is about webhook is here we don't need to wait for this thing (this preprocessing) or who sent this request that only want to send this , now do what ever you want 
    # we don't need to confirst that person (and this happens async)

    print(data)

    return {"message":"receieved that request"},200
# since this is a sync thing to this message will be sent to server but that preprocessing work will be happened



if __name__== "__main__": ## if app.py is a script then only run it 
    app.run(debug=True)