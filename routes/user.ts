import express from 'express';
const router = express.Router();
const models = require('../models');
import bcrypt from 'bcrypt'

// 新規登録
router.get('/sign_up', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.render('user/sign_up', {req: req});
});

router.post('/sign_up', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  (async () => {
    await models.default.User.sign_up(req.body)
    res.render('user/sign_in', {err: null, req: req});
  })();
});

// ログイン
router.get('/sign_in', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.render('user/sign_in', {err: null, req: req});
});

router.post('/sign_in', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  (async () => {
    const result = await models.default.User.sign_in(req.body);
    if(!result){
      return res.render('user/sign_in', {err: "ユーザーネームが異なります", req: req});
    }
    if (!bcrypt.compareSync(req.body.pass, result.pass)) {
      return res.render('user/sign_in', {err: "パスワードが異なります", req: req});
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
