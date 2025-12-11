from flask import Flask
from worker import celery_init_app
from task import add
import time


app= Flask(__name__)

celery_app= celery_init_app(app)
# putthing in varibale is important bz afterward we need to tell which is our celery_app 

@app.route('/test')
def test():
  return "testing app"


@app.route('/execute_add')
def execute_add():
  # simulating a two second work
  time.sleep(2) 
  # add(10, 20) this would be syncronous ;; what we have to do something other bz it would be asyncronous
  # so for that we use delay fn 
  add.delay(10, 20)
  return {'message': 'task started'}


@app.route('/long-task')
def execute_long():




if __name__== '__main__':
  app.run(debug=True)