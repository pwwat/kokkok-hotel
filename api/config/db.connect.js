const Sequelize = require('sequelize')

// Option 1: Passing parameters separately
try {
  let optionConfig = {
    // ประเภทการเชื่อมต่อ ถ้าทำใน localhost เป็น mysql นะครับ หรือถ้าใครสะดวกเป็น postgres ไปเลยก็ได้เน้อ
    // แต่ถ้าอยู่บนเซิฟเวอร์จะเป็น postgres นะครับ
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
  if (!process.env.DATABASE_URL) {
    // ตั้งค่าเพิ่มเติมถ้าเป็น postgresql
    optionConfig.port = 5432
    optionConfig.dialectOptions.ssl = {
      require: true,
      rejectUnauthorized: false
    }

    sequelize = new Sequelize('postgres://ocqvarphvcuewy:f3e8404df377c9411c79ad523ab7da76a173f3fa2405e38f3335ee5d7dec4c65@ec2-52-87-22-151.compute-1.amazonaws.com:5432/db6mhk892kb8o8', optionConfig)
  } else {
    // เผื่อทำใน localhost
  }

  // ทดสอบการเชื่อมต่อ ถ้ามี error ก็จะได้ทราบเช่นกันครับ
  sequelize.sync({ force: true })
    .then(function () {
      console.log('Connected Success')
    })
    .catch(function (err) {
      console.log('Connection Error! : ' + err)
    })

  module.exports = sequelize
} catch (e) {
  console.error('Error Connection: ' + e)
}
