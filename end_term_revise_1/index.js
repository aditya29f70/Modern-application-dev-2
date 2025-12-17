//###################### Q1


// const x= [1, 2,3, 4, 5, 6];
// const y= [...x, 7, 8, 9]

// const z= y.filter((x)=> x%2==0)
//           .map((i)=> i * i)
//           .reduce((a, i)=> a+i, (a=0))

// console.log(z);

// ... -> called spread operator;; a --> is called --> acumalater


//################# Q2

// const dataObj= {
//   message: "Welcome",
// }

// const optObject= {
//   el: '#app',
//   data: dataObj,
// }

// const app= new Vue(optObject)

// app.message='This bs degree'



// ########## Q3

// const dataObj={
//   message: "IITM online",
//   styleDiv: {
//     color: "blue" ,
//     backgroundColor: "red",
//     padding : "20px",
//     fontSize: "2em"
//   },
// }

// const optObj={
//   el: '#app',
//   data: dataObj,
// }

// const app= new Vue(optObj)


// note:: if you have given style through inline and also some style you gave in bounding with diff value then bounding will over-design on inline-style


// ############# Q8

// here we say component is locally registered --> and for that 'data' inside the component would be function and returning data

// const comp1={
//   template: "<h4> This is {{name}}</h4>",
//   data() {
//     return {name: "component 1"}
//   },
// }


// const app= new Vue({
//   el: "#app",
//   components: {
//     comp1,
//   },
// })



console.log(document.title);

setInterval(()=> document.title='title B', 1000)
// settimeout(()=> console.log(document.title), 1000)
setInterval(()=> document.title="title A", 2000)


1:40

