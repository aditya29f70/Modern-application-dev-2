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
