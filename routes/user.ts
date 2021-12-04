var express = require('express');
var router = express.Router();
var models = require('../models');
import bcrypt from 'bcrypt'

router.get('/sign_up', (req:any, res:any, next:any) =>  {
  res.render('user/sign_up');
});
router.post('/sign_up', (req:any, res:any, next:any) =>  {
  (async () => {
    var result = await models.default.User.sign_up(req.body)
    res.render('user/sign_in');
  })();
});

router.get('/sign_in', (req:any, res:any, next:any) =>  {
  res.render('user/sign_in', {err: null});
});
router.post('/sign_in', (req:any, res:any, next:any) =>  {
  (async () => {
    var result = await models.default.User.sign_in(req.body)
    if (!bcrypt.compareSync(req.body.pass, result.pass)) {
      return res.render('user/sign_in', {err: "パスワードが異なります。"});
    }
    res.redirect('/');
  })();
});
module.exports = router;
