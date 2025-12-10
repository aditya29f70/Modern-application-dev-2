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
remember these are in redis