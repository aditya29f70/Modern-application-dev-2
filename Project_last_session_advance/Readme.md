for csv file download option or email sending are time taken things so we want to use them such whole page will not get luck or completly stop; 

* and due to time taken we put it into as backend job

* so what we will do , we will switch it into diff thrade, they will get execution their and they come back and we will use them


* generally these backend job divided into three sections or three diff way to creating backend jobs


1. downloading csv report;; this can be done by admin or user side

* basically you allow by giving a button(donwload) that you can fetch data and download as csv


2. lly fetching the data and send it to some number of users as **email** 

* any periodic task you can perform 

3. we will be sending the update on g-space (use web hooks to update onto the g-space) for a particular user


## what is nature of these jobs is

1. client trigger it then it's get started to work

2. the job is automatically trigger after certain period of time -> it is **async period** job

3. it is trigger with the functionality or with the feature of the application

* if some changes happend with databases or application it will automatically get triggered so it is not a period trigger or trigger by user -> that why the concept of webhooks comes into the picture

* so we have to shift on linex for celery 