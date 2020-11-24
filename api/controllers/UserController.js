import Bcrypt from 'bcrypt'
import { setUpCookie } from '../middleware/auth'
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
      let users = await User.findAll()
      response.users = users
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

        // ลบพาสเวิร์ดออกจาก payload ป้องกันข้อมูลหลุดออกไป
        delete payload.password

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

      delete user.password

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
  logout: async (req, res) => {
    let response = {
      error: false,
      message: 'Success',
      code: 200
    }

    try {
      let result = setUpCookie(res, null, null)
      if (result.error) {
        throw new Error(result.message)
      }
    } catch (err) {
      response.error = true
      response.message = 'ผิดพลาด ' + err.message
      response.code = 400
    }
    return res.status(response.code).json(response)
  }
}
