var app = new Vue({
  el: "#app",
  data: {
    signup: {
      username: "",
      password: ""
    }
  },
  methods: {
    SignUp() {
      console.log("ini jalan signup");
      var self = this
      axios({
        method : "post",
        url : "http://localhost:3000/customers/",
        data : {
          username: self.signup.username,
          password: self.signup.password
        }
      })
      .then(data => {
        console.log(data);
        window.location.href="login.html"
      })
      .catch(err => {
        console.log(err);
      })
    }
  }
})
