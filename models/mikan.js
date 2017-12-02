'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mikanSchema = new Schema({
  userId: Number,
  username: String,
  mikanCount: Number,
  // ここは日付のみで良い
  date: {type: Date, default: new Date()},
});

module.exports = mongoose.model('Mikan', mikanSchema)