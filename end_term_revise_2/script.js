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
    this.myTodos= localStorage.getItem('todolist')
  },
  methods:{
    addTodoList(){
      this.todoList.push(this.newData)
      // if you want to add something in localStorage so the way to store --> localStorage.setItem(key(key_of_local_storage_where_you_want_to_store_that_value), value(that value which you wanted to store))
      localStorage.setItem('todolist', this.todoList) // it will not store as array of element it will store string of that elements
      // localStorage.setItem(STORAGE_KEY.JSON.stringify(this.todoList))
    }
  }
})

1:20