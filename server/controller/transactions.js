const modelTransaction = require ('../models/modelTransactions')
var jwt = require ('jsonwebtoken')

var addTransaction = function (req, res){
  var userInfo = jwt.verify(req.headers.token, 'kantal')

    var transaction = new modelTransaction ({
    user : userInfo.id,
    items : req.body.itemsId
  })
  // console.log(book);
    transaction.save(function(err,barang){
    if(!err){
      res.send(barang)
    } else {
      res.send(err)
    }
  })
}

module.exports = {
  addTransaction
};
