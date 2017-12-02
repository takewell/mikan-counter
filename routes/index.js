'use strict';
const express = require('express');
const router = express.Router();
const moment = require('moment-timezone');
const User = require('../models/user');

router.get('/', (req, res, next) => {
  const title = 'Mikan Counter';
  const isUser = req.user === undefined;
  if (isUser) {
    res.render('index', {title: title});
  } else {
    User.find({ userId: req.user.id}, (err, user) => {
      if(err) throw err;
      return res.render('index', {title: title, users: user});
    });
  }
});

module.exports = router;