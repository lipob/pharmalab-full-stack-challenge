require('dotenv').config();
const Sequelize = require('sequelize');
const { DBHOST, DBNAME, DBPASS, DBUSER } = process.env;

const db = new Sequelize(`postgres://${DBUSER}:${DBPASS}@${DBHOST}/${DBNAME}`, {
  logging: false
});

module.exports = db;