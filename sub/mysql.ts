const mysql = require('mysql');
const result = require('./result');
var constant = require('./.token');

var connection

connection = mysql.createConnection({
  host     : constant.host,
  user     : constant.user,
  database : constant.schema
});

// var sql = `SELECT * FROM ramen.api;`
// var sql = `truncate table ramen.api`
console.log(result.length)
// var sql = `INSERT INTO ${constant.schema}.api(name,address,open) values("a","i","u");`;
// connection.query(sql, function (error:any, results:any, fields:any) {
//   // console.log(error)
//   // console.log(results)
//   // console.log(fields)
// });