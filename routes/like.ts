var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/:id', (req:any, res:any, next:any) =>  {
  (async () => {
    console.log(req.params.id)
    var results = await models.default.Like.index(req.params.id);
    // console.log(results)
    await res.render('like', { results: results });
  })();
});
module.exports = router;