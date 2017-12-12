const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  const title = 'Mikan Counter';
  res.render('index', { title: title, user: req.user });
});

module.exports = router;
