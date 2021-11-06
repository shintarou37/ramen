var express = require('express');
var async = require('async');
const db = require('../models/index');
var router = express.Router();
// models
router.get('/', (req:any, res:any, next:any) => {
console.log(db.api)
  // async.series([
  //   db.api
  // ], function (err:any, results:any) {
  //     if (err) {
  //         return next(err);
  //     }
  //     res.render('index', { title: 'Express' });
  // });    
});

router.get('/test', (req:any, res:any, next:any) =>  {
  console.log(db.middle_area)
  db.middle_area.test()
  res.render('index', { title: 'Express' });
});

module.exports = router;
