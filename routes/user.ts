var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/sign_in', (req:any, res:any, next:any) =>  {
  (async () => {
    res.render('sign_in');
  })();
});
router.get('/sign_up', (req:any, res:any, next:any) =>  {
  res.render('user/sign_up');
});
router.post('/sign_up', (req:any, res:any, next:any) =>  {
  (async () => {
    var result = await models.default.User.sign_up(req.body)
    await res.render('user/sign_in');
  })();
});
module.exports = router;
