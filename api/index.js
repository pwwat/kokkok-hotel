const path = require('path')
const express = require('express')
const cookieParser = require('cookie-parser')

const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')
dayjs.extend(utc)
dayjs.extend(timezone)

// ตั้งค่า Default Timezone
dayjs.tz.setDefault('Asia/Bangkok')

// Create express instnace
const app = express()

// แปลงรูปแบบข้อมูลจาก request ที่ส่งมาให้อยู่ในรูปแบบ json
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// เป็นการบอกให้ browser เก็บ cache ไว้ ชั่วโมงนะเพื่อเรียกใช้ซ้ำไม่ต้องโหลดใหม่
const oneHour = 3600000 // 3600000 msec == 1hour

// ทำให้ folder public เป็น static file อ้างอิงและเป็นสาธารณะ และ อ้างอิงผ่าน prefix public ได้เช่นกัน
// __dirname เรียกจาก root ก่อนเสมอ (เผื่อในกรณี public ย้ายไปอยู่ที่อื่น)
app.use('/public', express.static(path.resolve(__dirname, '/public'), { maxAge: oneHour }))

// ปิดการ caching ของระบบกับ browser กับ server เพื่อป้องกันในกรณี 304 if none match
app.disable('etag')

// Require & Import API routes
const router = require('./routes/index')

// Use API Routes
app.use(router)

// Export the server middleware
const application = {
  path: '/api',
  handler: app
}

module.exports = application
