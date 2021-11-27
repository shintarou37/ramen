var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', (req:any, res:any, next:any) =>  {
  (async () => {
    var current_page = 1;
    if (typeof req.query.page !== 'undefined' && req.query.page && isFinite(req.query.page) && Number(req.query.page) > 0) {
        current_page =+ req.query.page;
    }
    var offset = (current_page - 1) * 20;
    var name : string
    req.query.name ? name = `%${req.query.name}%`: name = "%"
    var drop = await models.default.MiddleArea.index()
    var results = await models.default.Api.search(name, req.query.area, offset)
    console.log(JSON.stringify(results.rows))
    await res.render('search', { 
      results: results.rows, count:results.count, drop: drop, search_name:req.query.name, search_area:req.query.area, current_page: current_page
    });
  })();
});
module.exports = router;