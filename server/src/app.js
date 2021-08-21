const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const setHeaders = require('./middlewares/setHeaders.js');
const errorHandler = require('./middlewares/errorHandler.js');

const server = express();
server.name = 'API';

server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use(setHeaders);
server.use(errorHandler);

server.use('/', routes);

server.get('/', (req, res) => {
  res.send('Pharma Lab Full Stack Challenge');
});

module.exports = server;