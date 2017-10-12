var app = new Vue({
  el: "#app",
  data: {
    signin: {
      username: "",
      password: ""
    }
  },
  methods: {
    SignIn() {
      var self = this
      axios({
        method : "post",
        url : "http://localhost:3000/login/",
        data : {
          username: self.signin.username,
          password: self.signin.password
        }
      })
      .then(data => {
        console.log(data);
        localStorage.setItem("token", data.data.token)
        localStorage.setItem("userame", data.data.username)
        window.location.href="index.html"
      })
      .catch(err => {
        console.log(err);
      })
    }
  }
})
