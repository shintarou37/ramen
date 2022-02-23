var express = require('express');
var router = express.Router();
var models = require('../models');
router.get('/', async (req:any, res:any, next:any) => {

    // console.log(req.session.user)
    var drop = await models.default.MiddleArea.index()
    await res.render('index', {drop: drop, search_name: "", search_area: "", req: req});
});


module.exports = router;
