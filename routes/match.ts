var express = require('express');
var router = express.Router();
var models = require('../models');

var session = require("../utilities/session");

router.get('/', session.login_confirmation, (req:any, res:any, next:any) => {
    (async () => {
        console.log("--------------matchに入りました")
        await models.default.Match.register(req);
        await models.default.Like.delete(req);
        await res.render('match/success', {req: req});
    })();
});


module.exports = router;
