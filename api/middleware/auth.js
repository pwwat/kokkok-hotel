import jwt from 'jsonwebtoken'
import User from '../models/User'
import crypt from '../utilities/crypt'

const dayjs = require('dayjs')

let isProduction = process.env.NODE_ENV === 'production'

const authenticateJWT = async (req, res, next) => {
  const accessToken = req.cookies.token
  const refreshToken = req.cookies.refresh_token

  const token = accessToken ? crypt.decryptWithAES(accessToken) : null
  const decryptRefreshToken = refreshToken ? crypt.decryptWithAES(refreshToken) : null

  if (accessToken && refreshToken) {
    let user = null
    try {
      user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

      if (user) {
        // ถ้ามี ACCESS TOKEN แล้วเช็คว่า REFRESH TOKEN ยังใช้งานได้อยู่ไหม
        // หากใช้งานได้อยู่ก็จะทำงานได้ต่อไป แต่ถ้าทำงานไม่ได้ ก็ต้องหลุดออกจากระบบ
        const result = checkRefreshToken(decryptRefreshToken, user)
        if (result.error) {
          // โยนเข้า Catch
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
        let result = setUpCookie(res, token)
        if (result.error) {
          return res.status(401).send({
            message: 'Unauthorized! ' + result.message
          })
        }
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

    let result = setUpCookie(res, accessToken)
    if (result.error) {
      return res.status(401).send({
        message: 'Unauthorized! ' + result.message
      })
    }
    next()
  } else {
    return res.status(403).send({
      message: 'No token provided!'
    })
  }
}

const getIdentifier = (req) => {
  let response = {
    error: false,
    message: 'Success',
    user: null
  }

  const accessToken = req.cookies.token
  const token = accessToken ? crypt.decryptWithAES(accessToken) : null
  let user = null
  try {
    user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    response.user = user
  } catch (err) {
    response.error = true
    response.message = err.message
  }

  return response
}

const checkRefreshToken = (refreshToken, userAccess) => {
  try {
    let userRefresh = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)

    // ถ้า ID ไม่ตรงกันแปลว่าผิดปรกติ
    if ((userRefresh && userAccess) && (userRefresh.id !== userAccess.id)) {
      let err = {
        name: 'Unauthorized! ',
        error: true
      }
      throw err
    }

    return {
      name: 'Success',
      user: userRefresh,
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

const setUpCookie = (res, accessToken = null, user = null) => {
  try {
    if (accessToken && !user) {
      const encryptToken = crypt.encryptWithAES(accessToken)

      // cookie มีอายุ 1 วัน
      res.cookie('token', encryptToken, {
        httpOnly: true, // ปิดการเข้าถึงจาก client
        sameSite: true, // ใช้ได้ในกรณีจากโดเมนเดียวกัน
        secure: isProduction, // ใช้กับ https เท่านั้น (ถ้าเป็นโหมด Develop ให้เป็น false)
        expires: new Date(dayjs().add(1, 'd'))
      })
    } else if (user) {
      // Reset Assign Token
      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        algorithm: 'HS256',
        expiresIn: process.env.ACCESS_TOKEN_LIFE // jwt มีอายุ 30 นาที
      })

      // REFRESH TOKEN
      const REFRESH_TOKEN = process.env.REFRESH_TOKEN_SECRET

      const refreshToken = jwt.sign(user, REFRESH_TOKEN, {
        algorithm: 'HS256',
        expiresIn: process.env.REFRESH_TOKEN_LIFE // refresh token มีอายุ 1 สัปดาห์
      })

      const encryptToken = crypt.encryptWithAES(accessToken)

      // cookie มีอายุ 1 วัน
      res.cookie('token', encryptToken, {
        httpOnly: true, // ปิดการเข้าถึงจาก client
        sameSite: true, // ใช้ได้ในกรณีจากโดเมนเดียวกัน
        secure: isProduction, // ใช้กับ https เท่านั้น (ถ้าเป็นโหมด Develop ให้เป็น false)
        expires: new Date(dayjs().add(1, 'd'))
      })

      const encryptRefreshToken = crypt.encryptWithAES(refreshToken)

      // cookie มีอายุ 1 สัปดาห์
      res.cookie('refresh_token', encryptRefreshToken, {
        httpOnly: true, // ปิดการเข้าถึงจาก client
        sameSite: true, // ใช้ได้ในกรณีจากโดเมนเดียวกัน
        secure: isProduction, // ใช้กับ https เท่านั้น (ถ้าเป็นโหมด Develop ให้เป็น false)
        expires: new Date(dayjs().add(1, 'w'))
      })
    } else {
      // ถ้าไม่มีการ set อะไรมาแปลว่าต้องหลุดออกจากระบบ
      res.cookie('token', null, { expires: new Date(Date.now()) })
      res.cookie('refresh_token', null, { expires: new Date(Date.now()) })
    }

    return {
      error: false,
      message: 'Success'
    }
  } catch (err) {
    return {
      error: true,
      message: err
    }
  }
}

export {
  authenticateJWT,
  setUpCookie,
  getIdentifier
}
