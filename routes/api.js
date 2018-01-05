const express = require('express');
const router = express.Router();
const Mikan = require('../models/mikan');

router.get('/countmikan', (req, res) => {
  const date = new Date();
  const y = date.getFullYear().toString();
  const m = (date.getMonth() + 1).toString();
  const d = date.getDate().toString();
  const mikanId = y + m + d + req.user.id.toString();
  console.log(y + m + d);
  console.log(req.user.id.toString());
  console.log(mikanId);
  const q = req.query;
  console.log(req.query);
  Mikan.upsert({
    mikanId: mikanId,
    count: q.count,
    body: q.body,
    createdBy: req.user.id,
    updatedAt: date
  }).then(() => {
    console.log('upserted DB');
    res.render('index', { title: 'Mikan Counter', user: req.user });
  });
});

router.get('/getMikan', (req, res, next) => {
  if (req.user) {
    Mikan.findAll({
      where: {
        createdBy: req.user.id
      },
      order: '"updatedAt" DESC'
    }).then(mikans => {
      // console.log(mikans);
      sendJSON(res, true, { datas: mikans });
    });
  } else {
    res.render('index', { title: title, user: req.user });
  }
});

const sendJSON = (res, result, obj) => {
  obj['result'] = result;
  res.json(obj);
};


module.exports = router;
