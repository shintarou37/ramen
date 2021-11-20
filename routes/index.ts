var express = require('express');
var router = express.Router();
var models = require('../models');
router.get('/', (req:any, res:any, next:any) =>  {
  (async () => {
    var drop = await models.default.MiddleArea.index()
    // console.log(JSON.stringify(result))
    await res.render('index', { drop: drop});
  })();
});


module.exports = router;
