const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/db.connect')

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  profile_image_url: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  firstname: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  tel: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  created_at: {
    type: 'TIMESTAMP',
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: true
  },
  updated_at: {
    type: 'TIMESTAMP',
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: true
  },
  full_name: {
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
  indexes: [{
    unique: true,
    fields: ['id']
  }],
  defaultScope: {
    attributes: { exclude: ['password'] }
  },
  scopes: {
    withPassword: {
      attributes: {}
    }
  }
})

export default User
