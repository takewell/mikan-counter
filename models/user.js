// mongoDB をやめるかもしれない
'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: Number,
  username: String,
  date: {type: Date, default: new Date()}
});

module.exports = mongoose.model('User', userSchema)