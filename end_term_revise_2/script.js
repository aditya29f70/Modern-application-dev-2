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
  },
  methods:{
    addTodoList(){
      this.todoList.push(this.newData)
      localStorage.setItem(STORAGE_KEY.JSON.stringify(this.newData))
    }
  }
})


