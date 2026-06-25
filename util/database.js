const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'expensetracker',
  'root',
  'Yashav@3528',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

module.exports = sequelize;