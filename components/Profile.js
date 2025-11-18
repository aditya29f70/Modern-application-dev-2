const Profile ={
  template:`
  <div>
    <h2>This is your profile component!</h2>
    <h2>Hello {{$route.params.user}}</h2>
    <router-view></router-view>
  </div>
  `
}


export default Profile