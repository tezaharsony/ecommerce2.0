var express = require('express');
var router = express.Router();
var controller = require ('../controller/customers')

router.post('/',controller.create)
router.get('/',controller.findUser)
router.delete('/:id',controller.removeSpecifiedUser)
// router.put('/:id',controller.updateitem)
module.exports = router;
