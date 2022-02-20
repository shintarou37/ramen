var express = require('express');
var router = express.Router();
var models = require('../models');
import bcrypt from 'bcrypt'

// 新規登録
router.get('/sign_up', (req:any, res:any, next:any) =>  {
  res.render('user/sign_up', {req: req});
});

router.post('/sign_up', (req:any, res:any, next:any) =>  {
  (async () => {
    var result = await models.default.User.sign_up(req.body)
    res.render('user/sign_in', {err: null, req: req});
  })();
});

// ログイン
router.get('/sign_in', (req:any, res:any, next:any) =>  {
  res.render('user/sign_in', {err: null, req: req});
});

router.post('/sign_in', (req:any, res:any, next:any) =>  {
  (async () => {
    var result = await models.default.User.sign_in(req.body)
    if (!bcrypt.compareSync(req.body.pass, result.pass)) {
      return res.render('user/sign_in', {err: "パスワードが異なります。", req: req});
    }
    
    req.session.regenerate((err:any) =>{
      let like_arr = []
      for(let i = 0; i < result.Likes.length; i++){
        like_arr.push(result.Likes[i].api_id)
      }

      console.log(like_arr)
      req.session.user = result;
      req.session.like_arr = like_arr;
      req.session.save();
      res.redirect('/');
    });
  })();
});

module.exports = router;
