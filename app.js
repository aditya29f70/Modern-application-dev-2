// console.log('hello to this exteral file');

// what are obj  lly like dict + special thing is that it can hold function itself
// there diff way to make obj

// 1 . obj literal syntex
// so in obj key you can use string directly without quoutes if it is single str
// otherwise use quoutes --> internally every str autometically conveted into string
// keys is called property of the obj, and other then property we also have methods (this is fn which is atteched to the obj)




let obj= {
  plant: 'green',
  1: 'ram',
  whatplante: function (){ //these are called methods (fn which are defined inside obj as there property)
    console.log(this.plant);
  }
} ;
// like let obj2= new Object()

// console.log(obj.plant);
// // or
// console.log(obj['plant']);

// obj.whatplante()

// const i= obj.whatplante(); //if method whatplante is not returning something mean it is only printing something(like console.log printing something) then this varible will be undefined
// console.log(i);


// console.log(obj['1']); //you can't use obj.1


// creating new property/methods
// obj.a= 'this is new property';
// console.log(obj.a);



// also you can modify it
// obj.plant= 'blue'
// console.log(obj.plant);

// now create new fn

// obj.func2= function(){
//   console.log('hi, kya hal hai, new method created directly');
// }

// console.log(obj.func2());

//if we want to delete something --> use 'delete obj.property or fn'
// delete obj.plant;

// console.log(obj.plant);
// vvimpo note; there is letter diff b/w variable and obj property -> when ever you try to access property if will never give you error it will always give you ''undefined''
// if it is not there 




// obj property vs variable
// we can have some name of property and variable 
// the diff come , how they access there values (obj.property, for varible direct call variable name)

// when ever you run js--> global execution context will be created automatically
// 'is called "window"' --> document also there --> excusivaly for the browser
// and we can also create a property as global proberty using window--> window.a= 20 like
// that is diff from node.js runtime ,node.js does't have window


// let a= 10; //global variable

// window.a= 20; // window obj(global obj ,that why you can also use window or ''''globalThis'''') property

// console.log(a);
// console.log(window.a);
// console.log(globalThis.a);
// // also you this bz currently running obj is global exicution context or window obj
// // now this== globalThis

// console.log(this.a);

// since window is browser global obj not run in node.js, but 
// note; globalThis is global obj for both browser as well as node.js

// // .#######now talk about some case of 'var' varible

var c= 10 ; //creates variable and property in browser mean 
// if you do clg(c) or clg(window.c) both will give answer same
// let see (remember this is not happend in node.js)  ; note -> this things are happend only global space

// console.log(c);
// console.log(window.c);

// // if i change though window
// window.c= 20;

// console.log(c);

// const s= `this is value c ${c}`;
// console.log(s);

// // or
// let h= 100;

// const q= 'this is value h' + h
// console.log(q);



// `` is called vactics -->are  used for string templating; $ when you rendering something


// ############### now let discuss about some arrow fn 
// let start with fn -> there is two ways 
// 1. fn expression
// --> are expression fn that are stored in variable 
// eg bz note; a= function(){} <-- this is expression
// also called  anonamus fn


// console.log(a());

// let a= function(){
//   console.log('a');
// }

// //  called it like --> a(); lly in both
// a();


// // 2. fn declaration (normal declaration of fn)


// console.log(b());

// function b(){
//   console.log('b');
// }

// b();


// diff come in hosting
//  so fn expression is hoisted based on the rules of variable declaration -> you can't access them before declaration
// so if you declared it by using let and const it will be in TDZ so before assign any value to it if you ask value of that -> will give error

//  and fn declaration is fully hoisted and fully usable


// note if in you fn expression is not returning anything and you asking a() ; i mean ; eg clg(a()) --> lly to undefined() --> give error bz if you haven't returning anything


// ######################### lets move to the arrow fn

//  arrow fn are alway fn expression --> like let talk = () => {}
// since they don't have name so there name is always fn expression or fn declaraion
// 

// let talk= () => {
//   console.log('talking');
// }


// talk();

// what are the differances bw arrow and regular fns
// arrow fn should not be used as methods


// we have seen how to declare method (there two way to declare see)

// const person= {
//   'f-name': 'Aditya',
//   talk: function(){
//     console.log(`${this['f-name']} talks too much!`);
//   }, // first way to write method
//   talk2(){}, //second way to write method

//   //there is also other method to define method --> through arrow fn
//   arrowTalk: ()=> {
//     //if i do same thing here this will create problem
//     //bz here 'this' keyword doesn't refer to person obj -> instead refer to the global obj
//     console.log(`${this['f-name']} talks too much!`);

//     // so that is diff that arrow fn and normal fn behave deff in the obj
    
//   }
// }
// person.talk()
// person.arrowTalk()

// now see how it ('this') is excutting here for both senorio

//###### normal fn 

// what is this ?? how it is giving the value
// question yourself what is on your left handside of the fn who is calling this fn 
// eg
// abc(); //--> here nothing on the left side means --> window obj is called it or globalThis 
//or (this -->  would be global obj) or global obj is calling it
 


// function abc(){
//   console.log(this);
// }

// abc()


// // if this attached to an obj
// // so obj would be on there left side --> so that obj itself -> this
// // eg
// obj = {
//   a : 'rishav',
//   xyz(){
//     console.log(this);
//   }
// }


// obj.xyz(); // what is left of xyz 'obj' so only inside the xyz , this obj would we --> 'this'
// not this only for fn mean inside a fn we be calling 'this' then this will be that obj object
// other wise if we normally asking 'this' so this will be global this


// note; const object can be modefy 'const' doesn't mean obj doesn't modefy here, you can say obj = somethingelse

// now see obj inside obj


// const obj3= {
//   b: 'aditya',
//   xyz(){
//     console.log(this);
//   },
//   obj4: {
//     c: 'ram',
//     xyy(){
//       console.log(this);
//     }
//   }
// }

// obj3.obj4.xyy()



// now we can also assign a outer fn to value of key inside a obj

// function abc(){
//   console.log(this);
// }

// abc(); //would be window fn 


// const obj5={
//   meth1: abc
// }

// obj5.meth1() //now 'this' obj inside a fn which use obj5 obj so this 'this' obj will be -> obj5



// ### arrow fn (this topic)


// let arrowFunc= () => {
//   console.log(this);
// }

// arrowFunc();

// //this arrow fn not in any obj so 'this' obj will be -> window obj --> when we will call this fn
// // what exactly happens in arrow fn is -> when you define this fn what is outside this arrow fn is fixed
// //  



// const ob= {
//   ob_name: 'rishav',
//   arrowfunc: ()=> {
//     console.log(this);
//   }
// }

// ob.arrowfunc();


// const ob1= {
//   ob_name: 'rishav',
//   ob2:{
//     ob2_name: 'aditya',
//     arrowfun:()=> {
//       console.log(this);  //note; 'this' is fixed at creation; and what is value of this 'this' -> what ever outside it -> the whole window obj
//     }
//   }
// }

// ob1.ob2.arrowfun();

//




// ########## at the end remember only is a 'this' is used in a fn and that fn inside an obj then that obj would we 'this' obj (for normal fn )
// and for this alway try to see left hand side -> if we are taking obj to call that fn then that obj would be 'this'
//eg  (note; see note when every you define new normal fn --> new 'this' will be created)
// const o= {
//   o_name: 'obj',
//   f: function(){
//     let normal= function(){
//       console.log(this)
//     }
//     normal() //normal is normal fn and here we don't need to call any obj for this fn so 'this'--> window fn 
//   }
// }

// o.f()



// // ############ if 'this' obj in side a arrow fn and want to know what is 'this' obj so -> just go one outside and ask what 'this' contain if 'this' cantain 'window' obj then it will be window or if any obj then would be that obj
// // eg

// const objec={
//   obj_name: 'rishav',
//   fn: function(){
//     //let def a arrow fn 
//     // outside arrow fn 'this'= > objec
//     let arrow_fn = ()=> {
//       console.log(this);
//     }

//     arrow_fn()
//   }
// }
// objec.fn()



