var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', (req:any, res:any, next:any) =>  {
  (async () => {
    var name : string
    req.query.name ? name = `%${req.query.name}%`: name = "%"
    var drop = await models.default.MiddleArea.index()
    var results = await models.default.Api.search(name,req.query.area)
    console.log(JSON.stringify(results[0]))
    await res.render('search', { results: results, drop: drop, search_name:req.query.name, search_area:req.query.area});
  })();
});
module.exports = router;