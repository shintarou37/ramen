var express = require('express');
var router = express.Router();
var models = require('../models');
import bcrypt from 'bcrypt'

// 新規登録
router.get('/sign_up', (req:any, res:any, next:any) =>  {
  res.render('user/sign_up');
});

router.post('/sign_up', (req:any, res:any, next:any) =>  {
  (async () => {
    var result = await models.default.User.sign_up(req.body)
    res.render('user/sign_in');
  })();
});

// ログイン
router.get('/sign_in', (req:any, res:any, next:any) =>  {
  req.session.destroy();
  res.render('user/sign_in', {err: null});
});

router.post('/sign_in', (req:any, res:any, next:any) =>  {
  (async () => {
    var result = await models.default.User.sign_in(req.body)
    if (!bcrypt.compareSync(req.body.pass, result.pass)) {
      return res.render('user/sign_in', {err: "パスワードが異なります。"});
    }
    
    req.session.regenerate((err:any) =>{
      req.session.user = result;
      req.session.save();
      res.redirect('/');
    });
  })();
});

module.exports = router;
