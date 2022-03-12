import express from 'express';
const router = express.Router();
const models = require('../models');

const session = require("../utilities/session");

// マッチする
router.get('/', session.login_confirmation, (req: express.Request, res: express.Response, next: express.NextFunction) => {
    (async () => {
        const result = await models.default.Match.register(req);
        await models.default.Like.delete(req);
        res.redirect(`/message/${result.id}`);
    })();
});

// マイページ
router.get('/index/:id', session.login_confirmation, (req: express.Request, res: express.Response, next: express.NextFunction) => {
    (async () => {
        const user_id: number = Number(req.params.id);
        const results = await models.default.Match.getMypage(user_id);
        if(!results){
            return next();
        }
        res.render('user/my_page', {req: req, results: results});
    })();
});


module.exports = router;
