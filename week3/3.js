// Frontend implementation
// Requirements
// 1. Avoid complex logic - application logic should be in backend
// 2. No data storage
// 3. Work with stateless nature of HTTP




// will learn how to set and run vue.js (basically hello world vue application)
// vue is a js frame_work for building user interfaces and single-page applications

// before begin we have to install vue dev tools extension in our browser
// we will use it when will be having debuging




// go --> https://github.com/shrikrishna97/Resources-App-Dev/tree/main/App-Dev-2/Week-2
// we will be studying about '''callback fn''''

// open browser snippet for js codding
// note: all callback behave like asyncronus in the behaviure

// setTimeout(callback, timeout);
// how settime out run ; what it does?
// so when you write setTimeout it will trigger when automatically when script will run

// so setTimeout(callback, delay/timeout)

// at initalial stage when we do things directly all things run Synchronously

// but if we added some delay with our callback fn then the outcomes from the all the callback fn come at the last 
// and according to there delay times;
// setTimeout one of the asynchronous method

// what is delay ; so setTimeout tiggle that callback fn after what ever delay you have given it
// so you are setting a time out of a fn to tegger


// see every things will go Synchronously
console.log('myfirstOperation')
setTimeout(()=>{
    console.log('firstSetTimeOut')
}, 1000) // callback gets triggered after delay '''milliseconds'''
// but in general i don't want operation to get stack bz second operation will never happens unless  the setTime don't complete completly
console.log('mySecondOperation')

// what should be run structure here. -> operation1--> op2 -> setTimeouts
// every database query that we will do (or application wants to do) and bring the data from frontent
// everythings of that are asyncronus