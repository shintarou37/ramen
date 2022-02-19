var express = require('express');
var router = express.Router();
var models = require('../models');

var session = require("../utilities/session");

router.get('/:id', session.login_confirmation,(req:any, res:any, next:any) =>  {
  (async () => {
    console.log("-----------likeに入りました")
    // var results = await models.default.Like.index(req.params.id);
    var results = await models.default.Like.register(req);
    res.redirect(`/search/?name=${req.query.re_name}&area=${req.query.re_area}`);
  })();
});
module.exports = router;