import express from 'express';
const router = express.Router();
const models = require('../models');

const session = require("../utilities/session");

// マッチする
router.get('/', session.login_confirmation, (req: express.Request, res: express.Response, next: express.NextFunction) => {
    (async () => {
        console.log("--------------matchに入りました")
        await models.default.Match.register(req);
        await models.default.Like.delete(req);
        res.render('match/success', {req: req});
    })();
});

// マイページ
router.get('/index/:id', session.login_confirmation, (req: express.Request, res: express.Response, next: express.NextFunction) => {
    (async () => {
        console.log("----------------------マイページに入りました")
        let user_id: number = Number(req.params.id);
        let results = await models.default.Match.index(user_id);
        res.render('user/my_page', {req: req, results: results});
    })();
});


module.exports = router;
