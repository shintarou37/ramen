import express from 'express';
import bcrypt from 'bcrypt'
const router = express.Router();
const models = require('../models');

// 新規登録
router.get('/sign_up', (req: express.Request, res: express.Response, next: express.NextFunction)=> {
  res.render('user/sign_up', {err: null, req: req});
});

router.post('/sign_up', (req: express.Request, res: express.Response, next: express.NextFunction)=> {
  (async ()=> {
    const name: string = req.body.name;
    const pass: string = req.body.pass;
    const result = await models.default.User.sign_up(name, pass);
    if(!result){
      return res.render('user/sign_up', {err: "登録に失敗しました。", req: req});
    }
    res.render('user/sign_in', {err: null, sign_up: true, req: req});
  })();
});

// ログイン
router.get('/sign_in', (req: express.Request, res: express.Response, next: express.NextFunction)=> {
  res.render('user/sign_in', {err: null, sign_up: false, req: req});
});

router.post('/sign_in', (req: express.Request, res: express.Response, next: express.NextFunction)=> {
  (async ()=> {
    const name: string = req.body.name
    const result = await models.default.User.sign_in(name);
    if(!result){
      return res.render('user/sign_in', {err: "ユーザーネームが異なります", sign_up: false, req: req});
    }
    if (!bcrypt.compareSync(req.body.pass, result.pass)) {
      return res.render('user/sign_in', {err: "パスワードが異なります", sign_up: false, req: req});
    }
    
    req.session.regenerate(()=> {
      let like_arr = []
      for(let i = 0; i < result.Likes.length; i++){
        like_arr.push(result.Likes[i].api_id)
      }

      req.session.user = result;
      req.session.like_arr = like_arr;
      req.session.save();
      res.redirect('/');
    });
  })();
});

module.exports = router;
