var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/sign_in', (req:any, res:any, next:any) =>  {
  (async () => {

  })();
});
router.get('/sign_up', (req:any, res:any, next:any) =>  {
  res.render('sign_up');
});
router.post('/sign_up', (req:any, res:any, next:any) =>  {
  (async () => {
  console.log(JSON.stringify(req.body))
    var results = await models.default.User.sign_up()
    await res.render('sign_up');
  })();
});
module.exports = router;
