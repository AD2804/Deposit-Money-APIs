const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Deposit = sequelize.define('Deposit', {
  ActNo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  Date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: 'Deposit',
  timestamps: false,
});

module.exports = Deposit;
