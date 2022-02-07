var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/:id', (req:any, res:any, next:any) =>  {
  (async () => {
    // var results = await models.default.Like.index(req.params.id);
    var results = await models.default.Like.index(req.params.id);
    await res.render('like', { results: results, req: req });
  })();
});
module.exports = router;