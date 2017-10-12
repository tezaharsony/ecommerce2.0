const userModel = require('../models/modelCustomers')
var bcrypt = require ('bcryptjs')

var create = function(req, res) {
  var salt = bcrypt.genSaltSync(10);
  var password = bcrypt.hashSync(req.body.password, salt);

  // console.log("gooooooooo");
    var user = new userModel({
    username : req.body.username,
    password : password
  })
  // console.log(book);
    user.save(function(err,item){
      console.log(err);
      console.log(user);
      if(!err){
        res.send(user)
      } else {
        res.send(err)
      }
    })
}

var findUser = function (req,res){
  userModel.find({}, function(err,user){
    if(!err) {
      res.send(user)
    } else {
      res.send(err)
    }
  });
}

var removeSpecifiedUser = function(req, res) {
  userModel.findOneAndRemove({_id:req.params.id}, (err, user) => {
    if(err) res.send(err)
    res.send("data deleted")
  })
}

module.exports = {
  create,
  findUser,
  removeSpecifiedUser
};
