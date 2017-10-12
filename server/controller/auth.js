var Auth = require('../models/modelCustomers');
var bcrypt = require ('bcryptjs')
var jwt = require ('jsonwebtoken')

var Login = function (req, res) {
  Auth.findOne({username : req.body.username}, function(err, user){
    if (bcrypt.compareSync(req.body.password, user.password)) {
      let token = jwt.sign({
        id: user._id,
        username: user.username
      }, "kantal")
      res.send({
        token:token,
        username:user.username
      })
    } else {
      res.send('please type your correct password')
    }
  });
}


module.exports = { Login };
