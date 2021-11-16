var express = require('express');
var router = express.Router();
var models = require('../models');

router.post('/', (req:any, res:any, next:any) =>  {
  (async () => {
    console.log("shop---------" + req.body.shop)
    console.log("area---------" + req.body.area)
    req.body.shop ? "": req.body.shop = "%"
    var result = await models.default.Api.search(req.body.shop,req.body.area)
    // await res.render('index', { result: result});
  })();
});
module.exports = router;