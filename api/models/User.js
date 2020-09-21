const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/db.connect')

class User extends Model {}
User.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  firstname: { type: DataTypes.STRING, allowNull: false },
  lastname: { type: DataTypes.STRING, allowNull: false },
  tel: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  created_at: { type: 'TIMESTAMP', defaultValue: sequelize.literal('CURRENT_TIMESTAMP'), allowNull: true },
  updated_at: { type: 'TIMESTAMP', defaultValue: sequelize.literal('CURRENT_TIMESTAMP'), allowNull: true },
  fullName: {
    type: DataTypes.VIRTUAL,
    get () {
      return `${this.firstname} ${this.lastname}`
    },
    set (value) {
      throw new Error('Do not try to set the `fullName` value!')
    }
  }
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
  indexes: [{ unique: true, fields: ['id'] }],
  defaultScope: {
    attributes: { exclude: ['password', 'token'] }
  },
  scopes: {
    withPassword: {
      attributes: { }
    }
  }
})

export default User
