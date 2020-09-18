const express = require('express')
const router = express.Router()

// Controller
const IndexController = require('../controllers/IndexController')
const UserController = require('../controllers/UserController')

// Index Controller
router.get('/', IndexController.index)

// User Controller
router.get('/users', UserController.index)

module.exports = router
