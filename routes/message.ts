import express from 'express';
const router = express.Router();
const models = require('../models');

const session = require("../utilities/session");

router.get('/:id', session.login_confirmation, (req: express.Request, res: express.Response, next: express.NextFunction) => {
  (async () => {
    console.log("-----------message_getに入りました")
    const match_id: number = Number(req.params.id);
    const user_id: number = req.session.user.id
    const result = await models.default.Match.getTalk(match_id, user_id);
    // console.log("----------------------" + JSON.stringify(result))    
    res.render("message/list",{req: req, result: result})
    
  })();
});
router.post('/:id', session.login_confirmation, (req: express.Request, res: express.Response, next: express.NextFunction) => {
  (async () => {
    console.log("-----------message_postに入りました")
    const match_id: number = Number(req.params.id);
    const user_id: number = req.session.user.id
    const result_register = await models.default.Message.register(match_id, user_id, req.body.content);
    const result_get = await models.default.Match.getTalk(match_id, user_id); 
    // console.log("result_get----------------------" + JSON.stringify(result_get))   
    res.render("message/list",{req: req, result: result_get})
    
  })();
});

module.exports = router;