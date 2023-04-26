const debug = require('debug')('frontend-code-challenge');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require("cors");

const users = require('./routes/users');

const app = express();
const logger = require('./lib/logger');
const log = logger(app);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
app.use(function(err, req, res, next) {
  log.error(err);
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});

module.exports = app