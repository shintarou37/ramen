var express = require('express');
var router = express.Router();

router.get('/sign_in', (req:any, res:any, next:any) =>  {
  (async () => {

  })();
});
router.get('/sign_up', (req:any, res:any, next:any) =>  {
  (async () => {
    console.log("req.params.id")

    await res.render('sign_up');
  })();
});
module.exports = router;
