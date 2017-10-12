var express = require('express');
var router = express.Router();
var controller = require ('../controller/transactions')

router.post('/',controller.addTransaction)
// router.put('/:id',controller.updateitem)
module.exports = router;
