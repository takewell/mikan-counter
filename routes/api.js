const express = require('express');
const router = express.Router();
const Mikan = require('../modeles/mikan');

router.get('/count', (req, res, next) => {
  const count = req.query.count;
  Mikan.upsert({
    user: req.user,
    count: count
  });
  res.render('index', { title: title, user: req.user });
});

module.exports = router;
