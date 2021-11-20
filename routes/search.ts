var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', (req:any, res:any, next:any) =>  {
  (async () => {
    req.query.name ? "": req.query.name = "%"
    var result = await models.default.Api.search(req.query.name,req.query.area)
    // console.log(JSON.stringify(result))
    await res.render('search', { result: result});
  })();
});
module.exports = router;