'use strict';
const express = require('express');
const router = express.Router();
const moment = require('moment-timezone');

router.get('/', (req, res, next) => {
  const title = 'Mikan Counter';
  res.render('index', {title: title, user: req.user});
});

module.exports = router;