// javascript Even loop and call stack
// Vue with Existing API's 

// 3:32 → Using APIs

// 16:52 → Async

// 22:30 → Even Loops and Call Stacks

// 40:52 → Concurrency vs Parallelism

// 58:09 → Weather App Demo using API

// 1:40:00 → Wrap Up

// live lec
// topic -> Async javascript





// console.log('start');
// setTimeout(()=> console.log('Timeout 1'), 1000);
// setTimeout(()=> console.log("Timeout 2"), 1000);

// console.log("End");





// 1. run the code line by line in javascript
// when you put delay= 0 after that the answers will be same 
// why -> try to know in terms of *********'Event loop'**********
// --> like js how handle async codes (these setTimeout fns are async in nature)

// 2. all the call back fn will go in the web api
// note: in browser we have something called web Api that handles asyncs code 
// so this call back fn sent to that web API (and tell web api that execute it later on)
// lly after that next line lly this is also async so it's call back fn also goes in the ''''web api''' with call that run later
// and these call back fn arange accroding to it's delay time


// 3. task queue/call back queue
// as soon as 0 millisecond is over the web api that was keeping out how much time is remaining
// sends it to the '''''task queue ''''' 
// task queue is somewhere , where all the '''all fns''' that had to be run later on. will be stored


// at the end the js engine will be empty all the result will be printed out 
// or call stack is empty right now (here is game now ) --> what happens now --> some thing called $$ event loop $$
//  in this event loop all the fn go javascript engine from task queue (or go in the call stack)



// what is this web api --> you know that the is runtime where we have one part '''js engine''(which exicute code line by line) and there is also '' this web api '' which allow us to do diff kind of functionality
// apart from this line by line code (note web api also notes how things happending insided or this time/delay things, notes how much is passed since time is passed so it will it to task queue/callback queue)

// so this web api things is only for browser runtime ; there is any other thing in node js runtime
// so web api has --> (document, window, fetch, setTimeout, setInterval)



// some more complicated

// console.log('Start');
// setTimeout(()=> {
//   setTimeout(()=> console.log('Nested 1'), 0);
//   setTimeout(()=>console.log('Nested 2'), 0);
// }, 0);

// setTimeout(()=> console.log('Timeout 2'), 0); 
// console.log('End')


// note vvim exicution of the code only happen in the js engine

// https://www.youtube.com/watch?v=grnQMWJT6cU&list=PLZVf4uJM87NpbAzc-AB2cubaZjO6wDv_6&index=8
// 1:50:00 min  ******************************

// note in js script when you have fn inside fn then it's exicution like --> stack (first in last out)

// so below is called called back base approch!, this is also asysc programming -> why call back --> bz we are giving it fn as it's argument to execute later on
// a lot of thing call back base and lot of things are '''''''promise base''''''


// note : we are passing a fn which also a fn or passing fn as arugment;that thing which we can do in js ->since js fn is ''''''first class cetizin''''''''' -> we can pass them around like object    
 

// function abc(cb){
//   // any time consumming things here
//   for(let i=0; i<10; i++){
//     console.log(i);
//   }
//   // 

//   cb(); //run after that above loop will be ran
// }

// function have_do(){
//   console.log('inner fn');
// }


// abc(have_do)



// ********** another way to doing these things is called """"""""""promise base approch"""""""""""""""" 
// this more modern base approch 

// promise -> do something in the future -> it is a object basically ;; that has three diff stage
// 1. pending, 2. resolved, 3. rejected

// when a promise is created the stage is pending ; and once the promise either get the proper data back (then the promise get resolved) or get an error(then the status get rejected)
//  now move it to how to make this promise
// 'a' and 'b' will be fns (pre define fns)
// so inside Promise when we call a() mean promise is resolved and what ever we pass a(here) will be data for resolved promise
// generally we take this Promise(res, rej) ; don't matter what name is ;; what matter is what is the positions





// const prom = new Promise(
//   (a, b)=> {
//     // we call a when promise is resolved
//     // so what ever a or b you give it's parameter it's mean it is happend
//     // a('successfully get resolved!!')

// // now how to show pending thing -> you settimeout bw this settimeout delay time it will be showing the pending thing
//     setTimeout(()=>{ a({name:'aditya', age:25}) , 1000}) // note this is return value of resolved '' this a(this_one)""""


//     // we call b when promise is rejected
//     // b()
//   }
// )

// console.log(prom)  // it is sync so it will immedially show pending
// and in the action thing 'then' part ' it will show rejected later on

// this meaning that after the promise get rejected or resolved do this
// prom.then(first_one_for_resolve(mean when resolved then do this), sencond_para_for_it_rejected)
// prom.then(()=>{ console.log('it was resolved')}, function() {console.log('it was rejected')})

// now for more specific way to do thing (which specifie what we should do when promise get reject and resolved) -> so for this we ''''.catch'''''

// prom.then((data) => { console.log(`it was resolved and res(response is ) ${data.name} and it's age is ${data.age}`); return new Promise((a, b)=> b())}).catch(()=> {console.log('it was rejected')})  // promise is async(by nautre) also always run after sync
//     .then(()=>{console.log('second then')}).catch(()=>{console.log('second catch')})
//     .then(()=>{console.log('third then'); throw new Error('This new Error')})
//     .finally(()=> {console.log('I will be executed no matter it is executed or rejected')} )
//     .catch((e)=>{console.log(`Third error catch and ${e} `)})


// console.log(prom) // since the sync things run first so it will also showing pending

// note; we can also have another then and catch; have to chain it normally
// thing it is as when ever there is resolved condition then all the 'then' things will work as fn work async
// lly it there is rejected condtion then all the 'catch' thing work

// so also we return promise to confirm then after rejection get exicuted or resolved

// note if we are using () => ()  mean we are return something when we don't use {}
// so these thing used with fetch api

// fetch('google.com/api')
//   .then((res) => res.json()) // mean do 'then' when we got some response from google.com/api;; and here we returng a object res key(which fn 'json'(which get data in json format))
//   .then((data) => console.log(data));

// basically we know here that fetch will return promise that why we using 'then' here
// that why most of the time we will we using promises instead of making it


// we also have .finally -> it execute no matter it is got exicuted or rejected

// note: when it catch an error so it will 'catch' afterword this error is resolved now 'then' will execute if there is no any other issue will happend
// any error before any 'catch' can be resolved by that 'catch' since that error is noticed by that catch so that why that is assume to be resolved 
// if we are using manual error like through -> throw new Error('message')
// and also want to know what is this message or any error message the you like -> .catch(e){()=> clg(e)}

// and also aften we sent data when it is executed like in promise 
// Promise((a, b)=> {a({name:'adiya'})})
// how to catch -> lly as error -> .then(data){}

// finally doesn't take any parameter ; if you give any parameter it will alway be undefine ''''''' this is only for finally'''''''''



// const prom= new Promise(
//   (res, rej)=> {
//     function abc(a){
//       if (a>20){ res(' It is resolved')} else { rej('It is not resolved')}
//     }
//     abc(22)
//   }
// )

// prom.then((x)=> 20) // it is returning 20
//     .catch(()=> {console.log('catch'); return 10;})
//     .finally((x)=> {console.log(`new finally ${x} `)})
//     .then((x)=> {console.log('2nd then',x); return 30} )
//     .finally((x)=> {console.log(x)})
//     .then((x)=> {console.log('3rd then', x)})
//     .then(()=> console.log('see_here_it_is_return_clg_but_clg_for_printing_things_so_it_will_return_undefined'))
//     .catch((e)=>{e})
//     .then((x)=>{console.log('see_outcome',x)})



// ************ instead of using .then, .catch ; we can also use --> 'async' concept is same 

const prom= new Promise(
  (res, rej)=> {
    function abc(x){
      if (x>20){ res('It is resolved')} else {rej('It is rejected')}
    }
    abc(20)
  }
)



// await // means wait for promise to resolved and give me the result
// you can't you it anywhere you have to create a fn for using it
// anywhere where you using this await keyword you have to define this ''async'' fn
// so it will awailt for prom that it will be responsed or rejected;
// i wait for prom , when it will resolved it will give the data
// if it get rejected it will directly throw error

async function get_some_data(){
  // if rejected it will throw error
  try{
  const data= await prom;
  console.log(data);
  } catch(e){
    console.log(e)
  }
}

get_some_data()

// so this is lly to do 
// prom.then((data)=>{console.log(data)}).catch((e)=> console.log(e))









