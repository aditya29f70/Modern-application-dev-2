// start vue.js
// 1. what are the things require in html page
// --Text (data)
// - static (hardcode in html) (eg. <h1>hello world</h1>) -> so you can direclty render static data in your html page
// , dynamic (API's, server side rendering) eg jinja or js or vue.js, databases
// today we will see client side rendering

// --styling (css)

// - Input

//  --button click (events)


// why do we need frame work (Vue.js) instead of js
// inbuild js fns
// programatically load things (lazy loading)
// to make our life simple


const a= document.getElementById('name');
a.innerText= 'rishav'

// you can see for only changing the text i had to write two line of code

// there two way to add vue.js
// 1. CDN (content drivering  network) - host a buch of code in it
// just need to add the link to our html page
// 2. cli methods -> download the command line tool -> eg vite -> that allows to make a whole casfording(it is kind of structure) and you can change structure accordingly

// note if you are trying for cdn so note it link would be before
// you app run (in head or at the top of body)

// now see how can we use vue.js
// 1. make html portion where vue can work  like 'app' and 
// mount all the thing which try to use through vue.js

// so we have to tell vue where we need to mount it --> mounted at div whose id= 'app'
// for that we have property called 'el'(element)-> (a property of app object)  that tell the vue app where should i mount this '#app' # means 'id'
// now very thing which will be inside that div id= 'app' will be controled by vue.js

// now come to our dynamic data 1. how to create dynamic data
// for data we have another property call 'data' -> a property of app object; which itself object so it's contain key-value pairs; and these are dynamic data which we look forward to

// now we can also change attributes(styles) programmtically 
// so for this we have 'vue directives' -> v-bind

// now we have another attribute -> v-text ; this same like we did before for rendering by using {{}}; here we don't need that paranthsis we can directly use => v-text='food'
// if we have mulitple div with id app then the vue only work on first app 
// for other div you have to make another vue object (you can directly make it without taking it in any variable)


// now come to 'input' and 'form' how to use these in vue.js
// now basically we do completing two way binding
// so for that we have another vue-directives --> called vue-model=""
// or two way data binding


// what is '''reactivity''' in sence of frame work or html css
// it is related to 'state'' ; you saw how v-model is working basically you changing your input the rendering also chnaging as it is
// means what ever part we are changing only those part also changing from output mean it is also focusing on what is state of input according output will come (without reloading)

// in jinja server side rendering was happening for html or css or js
// in cliend side redering (CSR) -> some static data are there and some js codes are there that will generate more data
//  bz js is running locally so it will change or render the data locally
// rendering happens after getting the page from server side by js

// next topic is how to make loops;;;;import ********************
// 1:30:
https://www.youtube.com/watch?v=tyHafK9Mnqo&list=PLZVf4uJM87NpIKv7lH2RpjBcTHLKgDzVF&index=7

const vueApp= new Vue({ //called options object
  el: "#app",
  data:{
    food: 'pizza',
  }
})
