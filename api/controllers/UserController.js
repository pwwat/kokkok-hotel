import Bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User'
import crypt from '../utilities/crypt'

const dayjs = require('dayjs')

module.exports = {
  index: async (req, res) => {
    let response = {
      error: false,
      message: 'Success',
      users: []
    }

    try {
      response.users = await User.findAll()
    } catch (err) {
      response.error = true
      response.message = err.message
      return res.status(400).json(response)
    }

    return res.status(res.statusCode).json(response)
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
        let isProduction = process.env.NODE_ENV === 'production'

        // ลบพาสเวิร์ดออกจาก payload ป้องกันข้อมูลหลุดออกไป
        delete payload.password

        const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
          algorithm: 'HS256',
          expiresIn: process.env.ACCESS_TOKEN_LIFE // jwt มีอายุ 30 นาที
        })

        // REFRESH TOKEN
        const REFRESH_TOKEN = process.env.REFRESH_TOKEN_SECRET

        const refreshToken = jwt.sign({
          id: payload.id,
          email: payload.email
        }, REFRESH_TOKEN, {
          algorithm: 'HS256',
          expiresIn: process.env.REFRESH_TOKEN_LIFE // refresh token มีอายุ 1 สัปดาห์
        })

        const encryptToken = crypt.encryptWithAES(accessToken)

        // cookie มีอายุ 60 นาที
        res.cookie('token', encryptToken, {
          httpOnly: true, // ปิดการเข้าถึงจาก client
          sameSite: true, // ใช้ได้ในกรณีจากโดเมนเดียวกัน
          secure: isProduction, // ใช้กับ https เท่านั้น (ถ้าเป็นโหมด Develop ให้เป็น false)
          expires: new Date(dayjs().add(60, 'm'))
        })

        const encryptRefreshToken = crypt.encryptWithAES(refreshToken)

        // cookie มีอายุ 1 สัปดาห์
        res.cookie('refresh_token', encryptRefreshToken, {
          httpOnly: true, // ปิดการเข้าถึงจาก client
          sameSite: true, // ใช้ได้ในกรณีจากโดเมนเดียวกัน
          secure: isProduction, // ใช้กับ https เท่านั้น (ถ้าเป็นโหมด Develop ให้เป็น false)
          expires: new Date(dayjs().add(1, 'w'))
        })

        response.user = user
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
      message: 'Success'
    }

    console.log('requestt', req.body)

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

      response.user = user
    } catch (err) {
      response.error = true
      response.message = 'ผิดพลาด ' + err.message
    }

    return res.status(200).json(response)
  }
}
