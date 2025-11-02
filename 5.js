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

console.log('Start');
setTimeout(()=> {
  setTimeout(()=> console.log('Nested 1'), 0);
  setTimeout(()=>console.log('Nested 2'), 0);
}, 0);

setTimeout(()=> console.log('Timeout 2'), 0); 
console.log('End')


// note vvim exicution of the code only happen in the js engine

// https://www.youtube.com/watch?v=grnQMWJT6cU&list=PLZVf4uJM87NpbAzc-AB2cubaZjO6wDv_6&index=8
// 30:00 min


