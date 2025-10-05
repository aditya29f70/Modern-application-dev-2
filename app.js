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

let a= function(){}

//  called it like --> a(); lly in both
a();


// 2. fn declaration (normal declaration of fn)

function b(){

}

b();


// diff come in hosting



// >>>>>>>>>>>> time; 1:56:31









