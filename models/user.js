const { DataTypes } = require('sequelize');
const sequelize = require('../dbconfig/database');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
}, {
  timestamps: true,
});

module.exports = User;
