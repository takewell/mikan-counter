const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  const title = 'Mikan Counter';
  res.render('index', { user: req.user });
});

module.exports = router;
