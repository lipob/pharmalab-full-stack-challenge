const Sequelize = require('sequelize');
const db = require('../db');

const ProductType = db.define('productType', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
  },
  { paranoid: true }
);

module.exports = ProductType;