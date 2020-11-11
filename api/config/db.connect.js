require('dotenv').config()
const Sequelize = require('sequelize')

try {
  let optionConfig = {
    // ประเภทการเชื่อมต่อ ถ้าทำใน localhost เป็น mysql นะครับ หรือถ้าใครสะดวกเป็น postgres ไปเลยก็ได้เน้อ
    // แต่ถ้าอยู่บนเซิฟเวอร์จะเป็น postgres นะครับ
    host: 'https://damp-mountain-75279.herokuapp.com',
    dialect: process.env.DATABASE_URL ? 'postgres' : 'mysql',
    logging: false,
    dialectOptions: {
      dateStrings: true,
      typeCast: true,
      // เวลาอ่านจาก Database
      timezone: '+07:00'
    },
    define: {
      // column จะเป็นแบบ snake_case ก็คือแบ่ง word คั่นด้วย underscore
      underscored: true,
      timestamps: false
    },
    // เวลาเขียนลง Database
    timezone: '+07:00'
  }
  let sequelize = null

  // เช็คว่าอยู่บนเซิฟเวอร์รึเปล่า เพราะบนเซิฟเวอร์จะมี environment นี้
  if (process.env.DATABASE_URL) {
    // ตั้งค่าเพิ่มเติมถ้าเป็น postgresql
    optionConfig.port = 5432
    optionConfig.schema = 'public'
    optionConfig.dialectOptions.ssl = {
      require: true,
      rejectUnauthorized: false
    }

    sequelize = new Sequelize(process.env.DATABASE_URL, optionConfig)
  } else {
    // เผื่อทำใน localhost
  }

  module.exports = sequelize
} catch (e) {
  console.error('Connection Error! :  ' + e)
}
