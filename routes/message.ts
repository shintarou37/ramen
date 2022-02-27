var express = require('express');
var router = express.Router();
var models = require('../models');

var session = require("../utilities/session");

router.get('/:id', session.login_confirmation, (req: any, res: any, next: any) => {
  (async () => {
    
  })();
});

module.exports = router;