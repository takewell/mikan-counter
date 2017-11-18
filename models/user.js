'use strict';

const mongoose = require('mongoose');

const User = mongoose.Schema({
  username: String,
  message: String,
  date: {type: Date, default: new Date()}
});

module.exports = mongoose.model('Message', Message)