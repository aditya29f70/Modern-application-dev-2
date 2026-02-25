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

# so when every you backend try to communicate with another backend this may possible by using web-hook(you backend is trying to take features of another backend is called webhook) ;; and this web hook is provided by google chat api

## so when every we want to communicate with another backend we have a python fn **requests** which can be used for it (relate as axios.post)

## so **requests.post(your_api, json={"text:text(your_message)})**

1:19
