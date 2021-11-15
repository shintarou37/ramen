var express = require('express');
var router = express.Router();
var models = require('../models');

router.post('/', (req:any, res:any, next:any) =>  {
  (async () => {
    console.log(req.body.shop)
    console.log(req.body.area)
    // var result = await models.default.MiddleArea.index()
    // await res.render('index', { result: result});
  })();
});
module.exports = router;