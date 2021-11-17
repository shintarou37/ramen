var express = require('express');
var router = express.Router();
var models = require('../models');

router.post('/', (req:any, res:any, next:any) =>  {
  (async () => {
    req.body.shop ? "": req.body.shop = "%"
    req.body.area ? "": req.body.area = "%"
    var result = await models.default.Api.search(req.body.shop,req.body.area)
    // await res.render('index', { result: result});
  })();
});
module.exports = router;