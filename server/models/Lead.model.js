const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Lead = sequelize.define('Lead', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  loanType: {
    type: DataTypes.ENUM(
      'Home Loan',
      'Loan Against Property',
      'Business Loan',
      'Personal Loan',
      'Working Capital',
      'Financial Guidance'
    ),
    allowNull: false,
  },
  amount: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('new', 'contacted', 'converted', 'lost'),
    defaultValue: 'new',
  },
},
{
  tableName: 'leads',
  timestamps: true,
});

module.exports = Lead;