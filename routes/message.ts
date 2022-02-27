import express from 'express';
const router = express.Router();
var models = require('../models');

var session = require("../utilities/session");

router.get('/:id', session.login_confirmation, (req: express.Request, res: express.Response, next: express.NextFunction) => {
  (async () => {
    
  })();
});

module.exports = router;