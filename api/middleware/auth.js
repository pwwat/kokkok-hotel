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
    if (!token || !refreshToken) {
      return res.status(401).send({
        message: 'Unauthorized!'
      })
    }

    let user = null
    try {
      user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

      if (user) {
        const result = checkRefreshToken(decryptRefreshToken, user)
        if (result.error) {
          throw result
        }
      }

      req.user = user
    } catch (err) {
      let isUnauthorized = false

      if (err.name === 'TokenExpiredError') {
        let token = await reGenerateAccessToken(decryptRefreshToken)
        if (!token) {
          isUnauthorized = true
        }
      } else {
        isUnauthorized = true
      }

      if (isUnauthorized) {
        // set expires cookie
        setUpCookie(res)

        return res.status(401).send({
          message: 'Unauthorized!'
        })
      } else {
        setUpCookie(res, accessToken)
      }
    }

    next()
  } else if (!accessToken && refreshToken) {
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
  } catch (err) {
    return null
  }
}

const setUpCookie = (res, accessToken = null) => {
  if (accessToken) {
    const encryptToken = crypt.encryptWithAES(accessToken)

    // cookie มีอายุ 60 นาที
    res.cookie('token', encryptToken, {
      httpOnly: true, // ปิดการเข้าถึงจาก client
      sameSite: true, // ใช้ได้ในกรณีจากโดเมนเดียวกัน
      secure: isProduction, // ใช้กับ https เท่านั้น (ถ้าเป็นโหมด Develop ให้เป็น false)
      expires: new Date(dayjs().add(60, 'm'))
    })
  } else {
    res.cookie.set('token', { expires: Date.now() })
    res.cookie.set('refresh_token', { expires: Date.now() })
  }

  return true
}

export {
  authenticateJWT
}
