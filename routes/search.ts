import express from 'express';
const router = express.Router();
const models = require('../models');

router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction)=> {
  (async ()=> {
    let current_page: number = 1;
    if (typeof req.query.page !== 'undefined' && req.query.page && Number(req.query.page) > 0) {
        current_page =+ req.query.page;
    }
    const offset = (current_page - 1) * 20;
    let name: string;
    req.query.name ? name = `%${req.query.name}%`: name = "%";
    const drop = await models.default.MiddleArea.index();
    const results = await models.default.Api.search(name, req.query.area, offset);
    if(!drop || !results){
      return next();
    }
    req.session.save();
    res.render('search', { 
      results: results.rows, count:results.count, drop: drop, search_name: req.query.name, search_area: req.query.area, 
      current_page: current_page, req: req, like_arr: req.session.like_arr
    });
  })();
});
module.exports = router;