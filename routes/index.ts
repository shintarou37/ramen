var express = require('express');
var router = express.Router();
var models = require('../models');
console.log(models)

// router.get('/', (req:any, res:any, next:any) =>  {
//   (async () => {
//     res.render('test', { title: 'Express',name:"aa"});
//   })();
// });
// router.get('/mi', (req:any, res:any, next:any) =>  {
//   (async () => {
//     var result = await getIndex()
//     console.log(result)
//     res.render('index', { title: 'Express',name:"aa"});
//   })();
// });
// router.get('/api', (req:any, res:any, next:any) =>  {
//   (async () => {
//     var result = await getApi()
//     console.log(result.dataValues)
//     res.render('index', { title: 'Express',name:"aa"});
//   })();
// });

// router.get('/user', (req:any, res:any, next:any) =>  {
//   (async () => {
//     var result = await getUser()
//     console.log(result.dataValues)
//     res.render('index', { title: 'Express' ,name: result.dataValues.name});
//   })();
// });

module.exports = router;
