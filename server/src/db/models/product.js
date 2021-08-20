const Sequelize = require('sequelize');
const db = require('../db.js');

const Product = db.define('product', {
  code: {
    type: Sequelize.INTEGER,
    unique: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  drug: {
    type: Sequelize.STRING,
    allowNull: false
  },
});

module.exports = Product;