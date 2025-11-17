const app= new Vue({ //options or property
  data:{
    users: '',
    user:null,
    postData:{
      title: 'my first past',
      body: 'this is the content of the post',
      useId:1
    }
  },
  mounted(){
    console.log('Mounted is executed!!')
    this.method1()
    this.method4()
  },
  methods:{
    method1: function(){
      fetch('https://jsonplaceholder.typicode.com/users') //called static response
        .then((res)=> res.json())
        // .then((data)=> console.log(data)) // then is run after it returning prmise or it's promise give any response after that run will run
        .then((users)=> {
          this.users= users
        })
        .catch(err => console.log('Error', err))
    },

    method2: function(user_id){
      fetch(`https://jsonplaceholder.typicode.com/users/${user_id}`)
        .then((res)=> res.json())
        .then((user)=>{
          this.user= user
        })
        .catch((err)=> console.log("Error", err))
    },

    method3: function(){
      this.user=null
    },

    method4: function(){
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(this.postData)
      })
      .then(res => res.json())
      .then(data => console.log('Created Post', data))
      .catch(err => console.log('Error', err));
    
    } // you will see one post is added
      
    }
  


}).$mount('#app') //basically here we are mounting with help of $mount method

// so this how it will mounted our application.html's div id=app element

// what new thing after that -> using '''options''' and '''dynamic url''


// why we convert it in json string bz it is sentable json can't directly sentable
// so and also json string can be converted into json which happens when we resive body
// then used like data= request.json() //parsing of json

// normal json -> {user: 'aditya'}
// stringify json --> "{'user':'aditya'}"

// fetch --> promise (use then) --> if res give data (which is json like ) --> try to convert into --> so there for used res.json -> which is also time taken process so that why it's retern promise and for resolving this promised we use again ''then''



// we have been using this 'cathc 'what when eactly that error come
// catch bassically come when response come with error like 404, 500

// ******impot you might expect fetch() to treat all non-200 response (like(404, 500)) -- but that's 
// not how it works fetch() '' only reject the promise on network-level error's, not on http status codes.

// what is consider as an error?
// fetch will throw an error (reject the promise) for :
// * network failure (e.g no internet connection)
// * invalid domain (eg. server doesn't exist)
// CORS violation (when server blocks cross-origin requests)
// request timeout (only if implemented manually or via abort (controller))

// 1:38