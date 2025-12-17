// we will try to understand how do you create pages or structure so you can navigate one page to other
// and this will basically done with help of view-router (like in flask we have to install restful for api aprt from flask intalation)

// so vue router is basically is extension in view frame work therefore it is not 
// for vue2 we will be using vue router3

import Home from './components/Home.js'
import Profile from './components/Profile.js'
import Dashboard from './components/Dashboard.js'
import Payment from './components/Payment.js'
import noFound from './components/notFound.js'

// so now home.js component represent by Home and profile.js is now represent by Profile



const routes=[
  {path:'/home', component:Home},
  {
    path:'/profile/:user',
    name:'home',
    component:Profile,
    children:[
      {
        path:'dashboad',
        name:'dash',
        component:Dashboard 
      },
      {
        path:'payment',
        name: 'pay',
        component: Payment
      }
    ]
  },
  {
    path:'*',
    component: noFound
  }
]

// that Home inside home.js was a simple object before but now it is registered as component now
// when you go /home endpt it will render the Home component lly /profile





const router= new VueRouter({ //see it's also take option object
  routes: routes
})


const app= new Vue({ //that is called option obj or property
  router: router,
  
  data: {
    user: 'user123'
  },
  // mounted:{

  // },

  methods: {
    // dash: function(){
    //     this.$router.push(`/profile/${this.user}/dashboad`)
    // },
    dash: function(){
        this.$router.push({name:'dash', params:{user:this.user}})
    },

    // pay: function(){
    //     this.$router.push(`/profile/${this.user}/payment`)
    // }
    
    pay: function(){
        this.$router.push({name:'pay', params: {user:this.user}})
    },

    // router remember which page you have been through
    goBack: function(){
      this.$router.go(-1)
    },
    goForward:function(){
      this.$router.go(+1)
    }
  }
}).$mount('#app') // or just specify el:'#app', as it's property tell it that it has to mount in it's connected js file element id='app'


// we are going to define components and also define endpoint and when it has to render
// (lly to flask decoder) -> and these will be provide in routes object

// now after that we make a routes 'array' which will collection of objects which content (route+ which template we have to render in it)

// now think that we can't make static route every time we have to make dynamic route so for that we have to use route like
// '/profile/:user' here user is dynamically vary
// so in flask we do '/dashboad/<user>' but here we do '/dashboard/:user'


// now how do we access this dynamic route value is import thing
// note;; what vue say if you exporting any component directly then it has to be retrive like as object
// eg export const Home= {template ....}
// so it would be retrive like this -> import {Home} from '/component/home.js/
// like this is for only when you don't want to use 'default' for exporting something

// now excess this dynamical value we use $route in our component so after that we can directly access the 
// route and value that i provided as variable in the route can be access by --> 'params' --> $route.params
// just put {{$route.params}} -> and try to see what it is ; you will see it is Object whch have key as route variable name and it value
// as user is giving us


// now we are gonna see the nested routes
// eg we have somethings like
// /profile/user1  --> make it static/common
// /profile/user1/dashboard  --> make it additional
// /profile/user1/payments   --> make it additional
// so for this we use 'children' in route of '/profile/user1' bz these two are children of it

// note children routes always come without '/' only it's name

// ************ programmatic navigation and named routes
// i want button where when i click on it , it will bring that url which we have given in that button
// this is what we called programmatic navigation
// like don't want to write thing manually and i want thing programmically navigation
//here we redirect things happens and for this we use '''router'' for redirect to that url

// so note $route -> give you access of current route
// and $router -> help you to redirect other url
// in order to access the existing route of application you have to use it like -> 
// this.$router and for redirect we use 'push'
// this js way to write end point 

// we have better way to write this:
// this were the named route come into the picture





