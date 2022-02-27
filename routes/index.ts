import express from 'express';
const router = express.Router();
const models = require('../models');

router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  (async () => {
    // console.log(req.session.user)
    const drop = await models.default.MiddleArea.index()
    res.render('index', {drop: drop, search_name: "", search_area: "", req: req});
  })();
});


module.exports = router;
