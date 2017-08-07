const express = require('express');
const router = express.Router();
const controller = require('../controllers/itemController')

router.post('/', controller.addItem)
router.get('/', controller.getItems)
router.delete('/:id', controller.deleteItem)
router.patch('/:id', controller.updateItem)

module.exports = router;