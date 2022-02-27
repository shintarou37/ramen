import express from 'express';
const router = express.Router();
const models = require('../models');

const session = require("../utilities/session");

router.get('/:id', session.login_confirmation, (req: express.Request, res: express.Response, next: express.NextFunction) => {
  (async () => {
    
  })();
});

module.exports = router;