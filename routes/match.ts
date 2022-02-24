var express = require('express');
var router = express.Router();
var models = require('../models');

var session = require("../utilities/session");

router.get('/', session.login_confirmation, async (req:any, res:any, next:any) => {

    var result = await models.default.Match.register(req);
    await res.render('like/success', {search_name: "", search_area: "", req: req});
});


module.exports = router;
