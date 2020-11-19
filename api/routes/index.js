import { authenticateJWT } from '../middleware/auth'

const express = require('express')
const router = express.Router()

// Controller
const IndexController = require('../controllers/IndexController')
const UserController = require('../controllers/UserController')

// Index Controller
router.get('/', IndexController.index)

// User Controller
router.get('/users', authenticateJWT, UserController.index)
router.post('/login', UserController.login)
router.post('/logout', UserController.logout)
router.post('/register', UserController.register)

module.exports = router
