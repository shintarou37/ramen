import express from 'express';
const router = express.Router();
const models = require('../models');
const session = require("../utilities/session");

// いいね一覧
router.get('/index/:id', session.login_confirmation, (req: express.Request, res: express.Response, next: express.NextFunction)=> {
  (async ()=> {
    const id: string = req.params.id;
    const results = await models.default.Like.get(id);
    if(!results){
      return next();
    }
    res.render(`like/index`, {req: req, results: results});
  })();
});

// いいね登録
router.get('/:id', session.login_confirmation, (req: express.Request, res: express.Response, next: express.NextFunction)=> {
  (async ()=> {
    await models.default.Like.register(req);
    const like_api_id: number = Number(req.params.id);
    req.session.like_arr.push(like_api_id);
    res.redirect(`/search/?name=${req.query.re_name}&area=${req.query.re_area}`);
  })();
});
module.exports = router;