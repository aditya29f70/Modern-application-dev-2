for csv file download option or email sending are time taken things so we want to use them such whole page will not get luck or completly stop;

- and due to time taken we put it into as backend job

- so what we will do , we will switch it into diff thrade, they will get execution their and they come back and we will use them

- generally these backend job divided into three sections or three diff way to creating backend jobs

1. downloading csv report;; this can be done by admin or user side

- basically you allow by giving a button(donwload) that you can fetch data and download as csv

2. lly fetching the data and send it to some number of users as **email**

- any periodic task you can perform

3. we will be sending the update on g-space (use web hooks to update onto the g-space) for a particular user

## what is nature of these jobs is

1. client trigger it then it's get started to work

2. the job is automatically trigger after certain period of time -> it is **async period** job

3. it is trigger with the functionality or with the feature of the application

- if some changes happend with databases or application it will automatically get triggered so it is not a period trigger or trigger by user -> that why the concept of webhooks comes into the picture

- so we have to shift on linex for celery

## we have installed celery

- now it time to setup celery
- so go to that place where you have define the app, create a file called celery_config.py

* you will see somethings ;; these are the things which are required for celery to know what to do data which is coming and what to do those going out;; bz redis is a database you are gonna send and fetch data
* \*(it basically saved that tasks) this is the place where you redis database will be hosted (these 0, 1 .. are compartment, every compartment work a particular work)**broken_url= "redis://localhost:6379/0"** -> broken_url refers to what part of redis will be hit when you make a task;; and if that task return some data that data will be saved -> **result_backend**

* - **result_backend= "redis://localhost:6379/1"**

* these are some mandetary requirements

* - **Timezone= "Asia/kolkata"**

* - **broker_connection_retry_on_startup=True**

* you have app.py , and when ever you are working with app.py you see you have made diff config files
* lly like thing we create a celery init fn which allows you to create celery application and connected to the app.py

* so in application folder we create a new file for celery intialization -> celery_init.py

# what we need to note is line number 10 ;; it tell us , very similar app.config.from_object;; so where this config is coming from 'the file "celery_config" ' from root folder

# now we are gonna use this celery app at diff places

1. in app.py we are gonna make use of it (first init a celery app) , which will for running backend jobs;; import celery_init_app from celery_init file and `from celery.schedules import crontab`

- and a small config is needed -> celery.autodiscover_tasks();; is a define method in celery itself ; this will help you to retrieve all the tasks or the backend jobs that are going to the app -> we will be creating all the backend jobs like export csv, send mail, send messages are going to be the backend tasks /jobs so these jobs should be imported the app

* now we are going to create tasks -> create a task.py file

* so we have import this "from celery import shared_task " this decorater so using this with our task , get informed to celery.autodiscover_tasks() that this a task ; so you don't need to import task in app.py

## inside shared_task decorater

- ignore_results=False ;; means what ever is returned must be saved somewhere ;; so it is gonna store in -> celery -> result_backend (see in celery_config file)
- and **name** this is identified by worker ;; or worker identify them by this name to solve them

# so in above you can see, currently we are at backend and calling/requesting to another backend (that is google chat api, which allows us to sent a chat message to g-space)

# will seee how to create new g-space (this is basically webhook)

# so when every you backend try to communicate with another backend this may possible by using web-hook(you backend is trying to take features of another backend is called webhook (server to server communication)) ;; and this web hook is provided by google chat api

## so when every we want to communicate with another backend we have a python fn **requests** which can be used for it (relate as axios.post)

## so **requests.post(your_api, json={"text:text(your_message)})**

## now try to trigger these task

- note;; when ever you create a task, these task will identified by celery, and there are celery workers who will perform these tasks

- so we need to activate redis first , bz every things in celery depends on redis (see "ignore_results=False" and "tasks return")

- create one more terminal for redis-server run -> `redis-server` if redis is already running you can stop by -> `sudo systemctl stop redis-server`

- now we want another terminal and this terminal will be use run our workers `celery -A app.celery worker --loglevel=info`

* think how it is working -> first has to know that we are running celery app and '-A' mean what celery app you want to run -> "app.celery" (this refer to that celery app which we created in app.py) -> and 'worker' means we are tring to invoke worker of the celery for do the tasks ;; and at the end we have to log everythings so for that we have 'loglevel-info'

## now you have to trigger each task so import each task to our route file (note;; for import those tasks we use there fn name)

## and import one more thing -> `celery.result import AsyncResult`

- now you have build a normal route and intialize it as simple fn (it will work as normal python fn) but problem is that it will not run async , like if it take 5 min to get the response then the entire thread will get stopped for 5 min -> use the methods we called as -> `.delay()` -> now it will run async -> measn if it takes time then it will run at the background without disterbing any other routes or we can say our main thread will not gonna stop;; bz this is gonna work on diff thread

[tasks]

⚠️ No tasks are listed.

That means:

👉 Celery is not discovering your tasks.

## now we are gonna use **send_from_directory** method , this come from flask , this is responsible for downloading the file;; so our backend task was making sure that it works asyncly and to make the csv and return the csv file name and one the result is ready we trigger this fn **send_from_diectory** which takes ('static'(that csv file directly name), that_csv_file_name)

- so we have to import it from flask , import sent_from_directory (used mostly for downloading csv file);;; send_file also there but used for download other files

## 2. now our second tasks is send email

- for that we need to install **mailhog** go to this url `https://gist.github.com/dipenparmar12/4e6cd50d8d1303d5e914742f62659116`
  You need Go 1.21 or newer (recommended: 1.22+)
  - now open the interface of MailHog just go to the their 8025 port url ;now this is similar like you google mail interface
  - here you will see all the mails

* now let create a route which trigger it
* for currently this email sending is happened by admin (like we have a trigger button and when admin click on it those will be sent to patients one-by-one but we don't want it to be triggered by someone we want a time period where it automatically get triggered) and all the emails have been sent at the same time but we don't want it like that we want it like it has to be sent periodically

* so for that we have triggered by crontb (cron-tab) -> somethings called celery beat -> what it does , it triggers the tasks one-by-one in the periodic manner, and that period in which it has to be triggered will be defined by **crontb**

* this **crontb** can be used to trigger a particular functionality at a particular period;; for more information you can visit -> crontab.guru

* we have two things 1. on_after_config and 2. on_after_finilize so we use on_after_config when we haven't used the celery.Celery.autodiscover_tasks()

* **How to run celery Beat** if you have set the crontab it time to run celery-beat;; lly like how we run the celery worker -> `celery -A app.celery beat --loglevel=info

## it's completly working, now move to our third tasks

- so you can create you g-space and use it
- 1. create a g-space
- 2. click that g-space heeder(where your g-space name is written)
- 3. go to space setting > app and integrations > web-hooks > add web-hooks > copy the url > and paste where our backend was taking with another backend by using requests.post(url, request_body(json={}))

- what is going to happen, the moment this action is gonna happen, it is gonna comming on the g-space
- so when we want it to triggered , when my generate_msg is called by doctor
- so you can call it with that api call where doctor have checked the appointment

2:33
