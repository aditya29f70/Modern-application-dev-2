// const yy= 'Aditya';

// function find(){
//     console.log("you can't find me")
//     console.log(yy)
// }

// {
//     var a= 2;
//     const b= 10
// }

// console.log(a);
// console.log(b); // b is block scale that why it is giving b is not defined
// find()



// now we do coding part
// 1. Advance arrow function, Objects, closures

// how many way to define obj
// let obj1 = {}; called obj literal syntex
// obj2= new Object{}













// ###########under week 3 extra; 
// when you use setTimeout(), setInterval(), clearTimeOut(), clearTimeInterval()
// all these fn are asycronus in the nature
// now first learn; what exactly they do --> when you only write setTimeout() automatically it's template get generate a templeate 
// with setTimeout(()=>{}, timeout/delay);
// this ()=>{} here is called -> callback
// what it does -> 


// setTimeout(() => {
  
// }, timeout);


// note callback gets triggered after delay milliseconds
// very database query that  our application wants to do bring the data
// to the frontend -> everythings of that are asyncronus


// note; writting any asyncronus thing is lly like you are writing that code 
// at the end of the code; the timeout does matter if it is zero does mean it will not be exicuted at the end
// that mean --> after the syncorus things will be happended the first which will run is which has runtimeout 0 or very less

// these time are in millisec

// why it's fn is called callback ; bz it call it's after there delay
// in general fn is called back fn it is called in argument of any fn





// console.log('abc');

// setTimeout(()=>{
//   console.log('mad1')
// }, 0)

// setTimeout(()=>{
//   console.log('mad2')
// }, 1000)

// console.log('pqr')





// lastly only one thing to remember -> syncronus will happens first then asyncronus

// one eg of hoisting
// xyz()

// function xyz(){
//   console.log('hoising property in fn!!')
// }


// note ; if you are using ''break-point'' it will be only excuting all the code 
// which are before that breakpoint line

// note; both var declared variable and fn come under global variable before 
// we have been assigned andy value(for var)

// js variable once they are get hoisted they become property of
// a obj(script obj for let anc const variable), globalThis(for var, and fn)


// const a= 10;
// var b= 20
// console.log(globalThis.a);
// console.log(b)
