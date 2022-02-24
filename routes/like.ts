var express = require('express');
var router = express.Router();
var models = require('../models');

var session = require("../utilities/session");

router.get('/:id', session.login_confirmation, (req:any, res:any, next:any) =>  {
  (async () => {
    console.log("-----------likeに入りました")
    await models.default.Like.register(req);
    req.session.like_arr.push(req.params.id)
    res.redirect(`/search/?name=${req.query.re_name}&area=${req.query.re_area}`);
  })();
});

router.get('/index/:id', (req:any, res:any, next:any) => {
  (async () => {
    console.log("-----------likeに入りました")
    // console.log("-----------req.params.id" + req.params.id)
    let results = await models.default.Like.index(req.params.id);
    // console.log("-----------req.params.id" + JSON.stringify(results))
    res.render(`like/index`, {req: req, results: results});
  })();
});
module.exports = router;