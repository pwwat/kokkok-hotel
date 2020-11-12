import jwt from 'jsonwebtoken'
import User from '../models/User'
import crypt from '../utilities/crypt'

const dayjs = require('dayjs')

let isProduction = process.env.NODE_ENV === 'production'

const authenticateJWT = async (req, res, next) => {
  const accessToken = req.cookies.token
  const refreshToken = req.cookies.refresh_token

  const token = req.cookies.token ? crypt.decryptWithAES(accessToken) : null
  const decryptRefreshToken = crypt.decryptWithAES(refreshToken)

  if (accessToken && refreshToken) {
    let user = null
    try {
      user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

      if (user) {
        // ถ้ามี ACCESS TOKEN แล้วเช็คว่า REFRESH TOKEN ยังใช้งานได้อยู่ไหม
        // หากใช้งานได้อยู่ก็จะทำงานได้ต่อไป แต่ถ้าทำงานไม่ได้ ก็ต้องหลุดออกจากระบบ
        const result = checkRefreshToken(decryptRefreshToken, user)
        if (result.error) {
          throw result
        }
      }

      req.user = user
    } catch (err) {
      let isUnauthorized = false

      // เช็คว่าเป็น error จากการหมดอายุไหม ถ้าใช่ให้สร้าง token ใหม่โดยเอา refresh token มาเช็ค
      if (err.name === 'TokenExpiredError') {
        let token = await reGenerateAccessToken(decryptRefreshToken)
        if (!token) {
          isUnauthorized = true
        }
      } else {
        isUnauthorized = true
      }

      // ถ้าสร้างไม่ผ่านหรือผิดพลาด ก็หลุดออกจากระบบทันที
      if (isUnauthorized) {
        // set expires cookie
        setUpCookie(res)
        return res.status(401).send({
          message: 'Unauthorized!'
        })
      } else {
        setUpCookie(res, token)
      }
    }

    next()
  } else if (!accessToken && refreshToken) {
    // ถ้า cookie token หมดอายุให้สร้าง cookie token ใหม่
    let accessToken = await reGenerateAccessToken(decryptRefreshToken)
    if (!accessToken) {
      // set expires cookie
      setUpCookie(res)
      return res.status(403).send({
        message: 'No token provided!'
      })
    }

    setUpCookie(res, accessToken)
    next()
  } else {
    return res.status(403).send({
      message: 'No token provided!'
    })
  }
}

const checkRefreshToken = (refreshToken, user) => {
  try {
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
    return {
      name: 'Success',
      error: false
    }
  } catch (err) {
    return {
      name: err.name,
      error: true
    }
  }
}

const reGenerateAccessToken = async (decryptRefreshToken) => {
  let decode
  try {
    decode = jwt.verify(decryptRefreshToken, process.env.REFRESH_TOKEN_SECRET)
    if (decode) {
      let payload = (await User.findOne({
        where: {
          id: decode.id
        }
      }))
      let accessToken = null
      if (payload) {
        accessToken = jwt.sign(payload.toJSON(), process.env.ACCESS_TOKEN_SECRET, {
          algorithm: 'HS256',
          expiresIn: process.env.ACCESS_TOKEN_LIFE // jwt มีอายุ 30 นาที
        })
      }
      return accessToken
    }
    return null
  } catch (err) {
    return null
  }
}

const setUpCookie = (res, accessToken = null) => {
  if (accessToken) {
    const encryptToken = crypt.encryptWithAES(accessToken)

    // cookie มีอายุ 1 วัน
    res.cookie('token', encryptToken, {
      httpOnly: true, // ปิดการเข้าถึงจาก client
      sameSite: true, // ใช้ได้ในกรณีจากโดเมนเดียวกัน
      secure: isProduction, // ใช้กับ https เท่านั้น (ถ้าเป็นโหมด Develop ให้เป็น false)
      expires: new Date(dayjs().add(1, 'd'))
    })
  } else {
    res.cookie('token', null, { expires: new Date(Date.now()) })
    res.cookie('refresh_token', null, { expires: new Date(Date.now()) })
  }

  return true
}

export {
  authenticateJWT
}
