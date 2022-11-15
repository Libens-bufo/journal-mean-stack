const express = require('express')
const router = express.Router()
const controller = require('../controllers/items')

router.get('/', controller.getItems)

//router.get('/test', controller.getItemsTest) //Development route

router.post('/createItem', controller.createItem)

router.put('/toggleComplete', controller.toggleComplete)

router.delete('/deleteItem', controller.deleteItem)

module.exports = router