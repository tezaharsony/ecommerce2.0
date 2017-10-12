var express = require('express');
var router = express.Router();
var controller = require ('../controller/items')

router.post('/',controller.addItem)
router.get('/:id',controller.finditemById)
router.get('/',controller.finditem)
router.delete('/:id',controller.deleteitem)
router.put('/:id',controller.updateitem)
module.exports = router;
