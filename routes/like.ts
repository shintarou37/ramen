import express from 'express';
const router = express.Router();
var models = require('../models');

var session = require("../utilities/session");

router.get('/:id', session.login_confirmation, (req: express.Request, res: express.Response, next: express.NextFunction) => {
  (async () => {
    console.log("-----------likeに入りました")
    await models.default.Like.register(req);
    const like_api_id: number = Number(req.params.id);
    req.session.like_arr.push(like_api_id);
    res.redirect(`/search/?name=${req.query.re_name}&area=${req.query.re_area}`);
  })();
});

router.get('/index/:id', session.login_confirmation, (req: express.Request, res: express.Response, next: express.NextFunction) => {
  (async () => {
    console.log("-----------likeに入りました")
    // console.log("-----------req.params.id" + req.params.id)
    let results = await models.default.Like.index(req);
    // console.log("-----------req.params.id" + JSON.stringify(results))
    res.render(`like/index`, {req: req, results: results});
  })();
});
module.exports = router;