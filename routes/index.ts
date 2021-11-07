var express = require('express');
var router = express.Router();
import {
  User,
  getUser,
} from "../models/user";

router.get('/', (req:any, res:any, next:any) =>  {
  (async () => {
    var result = await getUser()
    console.log(result.dataValues)
    res.render('index', { title: 'Express' ,name: result.dataValues.name});
  })();
});

module.exports = router;
