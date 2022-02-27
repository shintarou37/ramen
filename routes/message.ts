import express from 'express';
const router = express.Router();
const models = require('../models');

const session = require("../utilities/session");

router.get('/:id', session.login_confirmation, (req: express.Request, res: express.Response, next: express.NextFunction) => {
  (async () => {
    console.log("-----------likeに入りました")
    const id: number = Number(req.params.id);
    const results = await models.default.Message.getAll(id);
    console.log("----------------------" + JSON.stringify(results))    
    res.render("message/list",{req: req, results: results})
    
  })();
});

module.exports = router;