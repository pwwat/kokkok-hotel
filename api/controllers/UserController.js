import path from 'path'
import Bcrypt from 'bcrypt'
import axios from 'axios'
import { setUpCookie, getIdentifier } from '../middleware/auth'
import User from '../models/User'

module.exports = {
  index: async (req, res) => {
    let response = {
      error: false,
      message: 'Success',
      users: [],
      code: 200
    }

    try {
      response.users = await User.findAll()
    } catch (err) {
      response.error = true
      response.message = err.message
      response.code = 400
    }

    return res.status(response.code).json(response)
  },
  show: async (req, res) => {
    let response = {
      user: null,
      error: false,
      message: 'Success',
      code: 200
    }

    const userId = req.params.id

    try {
      response.user = await User.findByPk(userId)
    } catch (err) {
      response.error = true
      response.message = err.message
      response.code = 400
    }
    return res.status(response.code).json(response)
  },
  login: async (req, res) => {
    let response = {
      user: null,
      error: false,
      message: 'Success',
      code: 200
    }

    try {
      let user = (await User.scope('withPassword').findOne({
        where: {
          email: req.body.email
        }
      }))

      if (user) {
        user = user.toJSON()

        const passwordIsValid = Bcrypt.compareSync(
          req.body.password,
          user.password
        )

        if (!passwordIsValid) {
          throw new Error('Invalid Email or Password.')
        }

        let payload = { ...user }

        // Assign Token
        let result = setUpCookie(res, null, payload)
        if (result.error) {
          throw new Error(result.message)
        }

        response.user = payload
      } else {
        throw new Error('Invalid Email or Password.')
      }
    } catch (err) {
      response.error = true
      response.message = err.message
      response.code = 400
    }

    return res.status(response.code).json(response)
  },
  register: async (req, res) => {
    let response = {
      error: false,
      message: 'Success',
      code: 200
    }

    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const email = req.body.email
    const password = req.body.password
    const tel = req.body.tel

    const hash = await Bcrypt.hashSync(password, 10)

    try {
      const user = await User.create({
        firstname,
        lastname,
        email,
        tel,
        password: hash
      }).then(user => {
        return user.get()
      })

      // Assign Token
      let result = setUpCookie(res, null, user)
      if (result.error) {
        throw new Error(result.message)
      }

      response.user = user
    } catch (err) {
      response.error = true
      response.message = 'ผิดพลาด ' + err.message
      response.code = 400
    }

    return res.status(response.code).json(response)
  },
  logout: (req, res) => {
    let response = {
      error: false,
      message: 'Success',
      code: 200
    }

    try {
      let result = setUpCookie(res)
      if (result.error) {
        throw new Error(result.message)
      }
    } catch (err) {
      response.error = true
      response.message = 'ผิดพลาด ' + err.message
      response.code = 400
    }
    return res.status(response.code).json(response)
  },
  update: async (req, res) => {
    let response = {
      error: false,
      message: 'Success',
      code: 200
    }

    const userId = req.params.id
    const params = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      tel: req.body.tel,
      email: req.body.email
    }

    try {
      let user = await User.update(params, {
        where: {
          id: userId
        }
      })

      response.user = user
    } catch (err) {
      response.error = true
      response.message = err.message
    }

    return res.status(200).json(response)
  },
  uploadImage: (req, res) => {
    let response = {
      error: false,
      message: 'Success',
      code: 200
    }

    const file = req.file

    let url = require('url')
    let host = url.format({
      protocol: req.protocol,
      host: req.get('host')
    })

    response.url = host + '/' + file.destination + '/' + file.filename

    try {
      User.update({
        profile_image_url: response.url
      }, {
        where: {
          id: req.params.id
        }
      })
    } catch (err) {
      response.error = true
      response.message = err.message
    }

    return res.status(200).json(response)
  }
}
