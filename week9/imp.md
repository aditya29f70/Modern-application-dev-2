# List of all commands used today

## install wsl --> `wsl --install` in terminal (for window only)

after getting the ubountu app in window you have to update and upgrade it using --> `sudo apt update` `sudo apt upgrade`

## now need to install redis (another server) and celery also (another server) but we don't need to install in linex but install through python

## first install redis go terminal (has to install globally in our system) `sudo apt install redis-server` sudo means bassically we are asking permission to install that to admin and apt means app install 

## after that it will automatically run if not there is commond called -> `redis-server`

## the server is running good but i would also like to know what is going on inside that server for that we have bunch of tool so we have to install those as well --> `sudo apt install redis-tools`

## so with redis tools comes commond line tool called redis-cli
`redis-cli ping` this is used to know what is going on inside the server --> if it will give you **PONG** that mean ok

## to check what's going on `redis-cli --stat`
## you can take help by using -> `redis-cli help`

### now try to make a flask application where we try to do asyncronour tasks

## also install celery through python => for that we will use virtual envir (which has python virtual python interpital)

# now install flask, celery, redis python package which is required celery(you saw that **task queue** in celery which is basically redis)

`pip3 install celery redis flask`

## we can also check what it has installed `pip3 freeze`

## now try to make a flask app using celery
for that we have to integrate this flask to celery system
--> we will be pushing tasks through flask server that mean we have to integrate our whole celery system to flask system

so for that you have to go a doc -> search ''flask with celery'' flask documentation will come

## celery has two import configs
1. url of that broker (task queue)
2. url of that results backend
remember these are redis (cache like things)


now we have to create some task and try to push it in celery task queue

these tasks are nothing python fns with decorators(and any python fn you can make it celery fn)
--> so a fn could be sending a email
--> starting a web scarping job
--> api call etc.

## from celery import shared_task
## shared_task this is kind of decorator which alllows us to make a function 
## celery task

## now after taking task inside the app route we have to start celery system first so we can use add.delay(10,20)
so commond to start celery server --> `celery -A app.or :celery_app worker` A mean app so when you write in commond line so it's mean in week8 we want to go  app and in app want to go celery_app

## you will see transport:   redis://localhost:6379/0 (transport url or broker url) lly results:     redis://localhost:6379/1

## and concurrency: 20 (prefork) mean there are 20 diff worker

### if you want to show log level info in celery so use 
`celery -A myapp worker --loglevel INFO`

# now try to do that task --> so go to that url directly ;; you will see
[2025-12-11 01:33:27,751: WARNING/ForkPoolWorker-15] celery task triggered
[2025-12-11 01:33:27,756: INFO/ForkPoolWorker-15] Task task.add[ce8e2430-0101-4d28-87fa-be4cc426e660] succeeded in 0.004771605999849271s: 30

## the task ''add'' with some attribute(which is hashed here) is added after it succeeded time and then result
# so you will see changes in redis-cli --stat

## just try to see time delay by manually using (time.sleep(2)) # 2 sec time delay

2:10:00
