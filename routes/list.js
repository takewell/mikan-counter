const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/:username', (req, res, next) => {
  if (req.params.username) {
    User.findAll({
      where: {
        username: req.param.username
      }
    }).then(user => {
      console.log(user);
      const userId = user.userId;
      console.log(userId);
    });
  }
});

module.exports = router;
