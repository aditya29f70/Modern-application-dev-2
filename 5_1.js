// fetch is an fn that is directly provided by js which can be used directly in your script
// so you can directly call it and use it

// Understanding fetch() api in js
// the fetch() api is a modern way to make http request in js.It returns a 
// Promise and is used to interact with api apis over the network.

// Why do we need fetch in js?
// fetch() lets js communicate with servers -- to get, sent, update, or delete data -without reloading
// the entire web page


// most modern web application need fetch() to :
// * get user data (eg. profile info)
//  * Submit forms (eg . login, comments)
//  * Display dynamic content (eg tweets, product price)
//  * Work with external services (eg. weather, maps, payments)

// we will understand the working of fetch for 4 diff scenarios:
// 1. fetch on a simple URL
// 2. fetch on a dynamic URL
// 3. fetch with data/info sent as request header (e.g token)
// 4. fetch with data/info sent as request body


// now want to make our vue application so for that we make two file --> application.html, script.js
// take vue2 cdn link take in your application.html file

// a sample code eg is -->

// fetch(url, options)
//   .then(response => response.json())
//   .then(data=> console.log('user:', data))
//   .catch(error =>console.log('Error:', error));


// so first senorio 
// 1. fetch on a simple static URL. 
// ********** noted;;; when ever this compnent gets loaded 
// this method(method1) should run  or the moment this component get mounted
// this particular method should run for this we have use this method in ''''mounted''' obtion or property of vue app

// so after mouting this method which is using ''fetch'' 
// so you will see this is returning ''promise'' ;; so since it is returning promise
// so we can use ''then''' and ''catch'' for response identification is it resolved or rejected
// since you know it is returning a promise to you don't need to store it, you can directly use ''then'' and ''catch''

// now if you clg the res you will see it is not giving us
// the response structurly so for this we have to convert the response in json format
// after doing clg(res.json()) you will see it is also returning a '''promise''' 

// why this is happend bz converting res in json is time taking so every time taking thing vue see it as 
// do it like asynclly so that bz it is convered into promise

// now we are trying to get dynamic data
// 2. fetch on a dynamic url
// use case : get a specific user's data using their userId.
// You want to retrieve infomation for a specific user with the help of their user.Id

// now come to our 3rd and 4th senorio (we will be doing both together)
// 3. Fetch with data sent as request header (eg. Token)
// 4 fetch with data sent in the request body (POST/PUT)

// 1:10:38
// https://www.youtube.com/watch?v=C4E5h-742J0&list=PLZVf4uJM87NpbAzc-AB2cubaZjO6wDv_6&index=9&t=522s



// now come to 3. senorio 
// fetch with ```data sent as request header (e.g Token)```` usally use for sent content-type ro token
// and 4. Fetch with `` data sent in the request body (POST/put)```

