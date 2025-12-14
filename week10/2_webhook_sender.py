## here we use requests which have similar kind of facility as **fetch** in js basically for calling a url
## simply through request.post(data)

import requests
import time
import random

url= "http://127.0.0.1:5000/webhook_reciever"

def send_data(): ## is used fn why we want to sent data multiple times
    data= {"message":"Hi server 2"}

    res= requests.post(url, json=data)  ## we only need to calling it bz it is webhook where **sender** only need to sent the request with data body not needed any confirmation response




while True:
    # some event occured, then send this information
    send_data()
    time.sleep(random.randint(1, 4))




1:17