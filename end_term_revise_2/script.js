// ################ Q1

// const obj={
//   name: 'Rohit',
//   arrowfn: null,
//   // arrowfn: ()=> {console.log(this.name);},
//   normalFuntion: function(){
//     this.arrowfn= ()=> {
//       console.log(this.name);
//     }
//     // console.log('hi');
//   }
// }

// // console.log(obj.arrowfn);

// obj.normalFuntion()
// obj.arrowfn()


const app = new Vue({
  el: '#app',
  data:{
    newData:'',
    todoList: new Array(),
    myTodos:""
  },
  mounted(){
    // this.myTodos= localStorage.getItem('todolist')
    this.todoList= JSON.parse(localStorage.getItem('todolist'))
  },
  methods:{
    addTodoList(){
      this.todoList.push(this.newData)
      // if you want to add something in localStorage so the way to store --> localStorage.setItem(key(key_of_local_storage_where_you_want_to_store_that_value), value(that value which you wanted to store))
      localStorage.setItem('todolist', JSON.stringify(this.todoList)) // it will not store as array of element it will store string of that elements
      // localStorage.setItem(STORAGE_KEY.JSON.stringify(this.todoList))
    }
  }
})

//note:: when we add value convert it in the stringify in the local stoage now it is saving things as stringify array, before it is saving string of things which is inside toDoList
// localStorage store things only in string format

// our array was --> ['todo1', 'todo2']
//  --> "todo1","todo2" -- w/0 stringify
//  --> "['todo1', 'todo2']" -- with stringify
// --> ["todo1", "todo2"] -- with JSON.parser


// // here background-color-> in cabab case
// <div style='background-color: red'></div>

// // here backgroundColor in Camel case
// <div v-bind:style='red'></div>

// red: {
//   backgroundColor:red;
// }


// Before_created  // can't access data
//      |
// Created // can access data
//      |
// ################ Component
// before_mounted // can access data
//      |
// mounted //can access data

// before update (want to show loader)
// updated