var express = require('express');
var router = express.Router();
var controller = require ('../controller/auth')

router.post('/',controller.Login)
// router.put('/:id',controller.updateitem)
module.exports = router;
