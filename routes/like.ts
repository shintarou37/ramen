import express from 'express';
const router = express.Router();
const models = require('../models');
const session = require("../utilities/session");

router.get('/:id', session.login_confirmation, (req: express.Request, res: express.Response, next: express.NextFunction)=> {
  (async ()=> {
    await models.default.Like.register(req);
    const like_api_id: number = Number(req.params.id);
    req.session.like_arr.push(like_api_id);
    res.redirect(`/search/?name=${req.query.re_name}&area=${req.query.re_area}`);
  })();
});

router.get('/index/:id', session.login_confirmation, (req: express.Request, res: express.Response, next: express.NextFunction)=> {
  (async ()=> {
    let results = await models.default.Like.index(req);
    res.render(`like/index`, {req: req, results: results});
  })();
});
module.exports = router;