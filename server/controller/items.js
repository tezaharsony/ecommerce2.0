const itemModel = require('../models/modelItems')


var addItem = function (req, res){
  // console.log("gooooooooo");
    var item = new itemModel({
    name : req.body.name,
    price : req.body.price,
    imageurl : req.body.imageurl,
    desc : req.body.desc,
    stock : req.body.stock
  })
  // console.log(book);
  item.save(function(err,item){
    console.log(err);
    console.log(item);
    if(!err){
      res.send(item)
    } else {
      res.send(err)
    }
  })
}

var finditemById = function (req, res) {
  itemModel.find({ _id : req.params.id }, function(err, item){
    if (!err) {
      res.send(item)
    } else {
      res.send(err)
    }
  });
}

var finditem = function (req,res){
  itemModel.find({}, function(err,item){
    if(!err) {
      res.send(item)
    } else {
      res.send(err)
    }
  });
}


var deleteitem = function (req, res){
  itemModel.remove({_id: req.params.id}, function (err){
    if (!err) {
      res.send("data deleted")
    } else {
      res.send(err)
    }
  })
}

var updateitem = function (req, res){
  itemModel.findByIdAndUpdate({
    _id : req.params.id
  },{
    name : req.body.name,
    price : req.body.price,
    imageurl : req.body.imageurl,
    desc : req.body.desc,
    stock : req.body.stock
  })
  .then(item => {
    res.send(item)
  })
  .catch(err =>{
    res.send(err)
  })
}


module.exports = {
  addItem,
  finditemById,
  finditem,
  deleteitem,
  updateitem
};
