var express = require('express');
var async = require('async');
var aa = require('../models/index');
var models = require('../models');
var middle_area_test = require('../models/middle_area');
var tee = require('../models/test');
var router = express.Router();
// aa.middle_area
middle_area_test.te()



// router.get('/', (req:any, res:any, next:any) => {
// // console.log(aa.api)
//   // async.series([
//   //   db.api
//   // ], function (err:any, results:any) {
//   //     if (err) {
//   //         return next(err);
//   //     }
//   //     res.render('index', { title: 'Express' });
//   // });    
// });

// router.get('/test', (req:any, res:any, next:any) =>  {
//   // tee.say()
//   // middle_area_test.say()
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;
