var express = require('express');
var router = express.Router();
import {
  getUser,
} from "../models/user";
import {
  getApi,
} from "../models/api";
import {
  getMiddleArea,
} from "../models/middle_area";

router.get('/', (req:any, res:any, next:any) =>  {
  (async () => {
    var result = await getMiddleArea()
    console.log(result.dataValues)
    res.render('index', { title: 'Express',name:"aa"});
  })();
});
router.get('/api', (req:any, res:any, next:any) =>  {
  (async () => {
    var result = await getApi()
    console.log(result.dataValues)
    res.render('index', { title: 'Express',name:"aa"});
  })();
});

router.get('/user', (req:any, res:any, next:any) =>  {
  (async () => {
    var result = await getUser()
    console.log(result.dataValues)
    res.render('index', { title: 'Express' ,name: result.dataValues.name});
  })();
});

module.exports = router;
