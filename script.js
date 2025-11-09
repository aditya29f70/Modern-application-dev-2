const app= new Vue({ //options or property
  data:{
    users: '',
    user:null
  },
  mounted(){
    console.log('Mounted is executed!!')
    this.method1()
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
    }
      
    }
  


}).$mount('#app') //basically here we are mounting with help of $mount method

// so this how it will mounted our application.html's div id=app element

// what new thing after that -> using '''options''' and '''dynamic url''