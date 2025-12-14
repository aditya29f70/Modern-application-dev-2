from flask import Flask, request, Response, json, render_template
import time

app= Flask(__name__)

# now server is created
# but thing is how we will creat SSE server-sent-event
# it has two part
# 1. backend how it will contineously send data .
# 2. in client side , how do we send that first request.

# let try to make a chat like thing where all the uses can see all the chats

message_list= [{"name":"Aditya", "message":"hi Everyone 👋"}]

@app.route("/sent_message/<name>/<message>")
def add_message(name, message):
  message_list.append({"name":name, "message":message})

  return {"message":"data is stored"}, 200


## SSE (Server sent event) works
@app.route('/stream') ## what happens with this end point when someone use this , they will recieve some kind of event stream, or this endpoint always active untill client don't not close it
def stream():
  # first we try to know is there any new message of not

  # so we will use Flask Response and a response fn so when ever this Response is ask then that response fn will be triggered and check if there is any changed in list or not and accordingly sent data

  prevLen=0

  # this reponse should be generator
  def reponse():
    nonlocal prevLen
    while True:
      if (len(message_list)>prevLen): # means some new message is added in list (bz after client request it would be SSE and always being ron so this while loop always being ron if some update is happend in list that will be automatically found)
        prevLen= len(message_list)
        # execute some fn
        yield f"data: {json.dumps(message_list[-1])}\n event: message\n\n" ## with this \n\n at the last it will not run

        time.sleep(0.5)
# json.dumps will that dict to json_string format;; it's like json stringify

  return Response(reponse(), mimetype="text/event-stream") 

# mimetype that will tell server to that data which we are sending will be event stream
  # at the last we use **Response** which creat a response
# so keep the connection active (SSE)

@app.route("/watch-message")
def watch():
  return render_template("watch.html")

@app.route("/sent_message")
def sent():
  return render_template('send.html')


if __name__=="__main__":
  app.run(debug=True)

# so this is SSE will behave like a pub/sub mean we have published it now any new client come so that will 
# see updata from after it's subscribe time