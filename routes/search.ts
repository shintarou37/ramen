var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', (req:any, res:any, next:any) =>  {
  (async () => {
    let current_page = 1;
    if (typeof req.query.page !== 'undefined' && req.query.page && isFinite(req.query.page) && Number(req.query.page) > 0) {
        current_page =+ req.query.page;
    }
    let offset = (current_page - 1) * 20;
    let name : string
    req.query.name ? name = `%${req.query.name}%`: name = "%"
    let drop = await models.default.MiddleArea.index()
    let results = await models.default.Api.search(name, req.query.area, offset)
    await res.render('search', { 
      results: results.rows, count:results.count, drop: drop, search_name:req.query.name, search_area:req.query.area, 
      current_page: current_page, req: req
    });
  })();
});
module.exports = router;