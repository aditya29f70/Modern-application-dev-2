from celery import shared_task

## shared_task this is kind of decorator which alllows us to make a function 
## celery task


# if you don't want to store result ;; eg you are sending emails so we only want those will be sent (or task will go task queue worker should work on it but it should not go result_backend)
# so in this case it take '''ignore_result= True''' by default it is False

# @shared_task(ignore_result= True/False)

## now in order to execute this task 
## we can do it directly--> by route --> 
# see @app.route('/execute_add)

@shared_task()
def add(x, y):
    print('celery task triggered')
    return x + y