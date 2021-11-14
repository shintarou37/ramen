const mysql = require('mysql');
const result = require('./result');
var constant = require('./.token');

var connection

connection = mysql.createConnection({
  host     : constant.host,
  user     : constant.user,
  database : constant.schema
});
// レコード全削除
// var sql = `truncate table ramen.api;`
// var sql = `truncate table ramen.middle_area;`

var sql : string = ""
// ミッドエリアSQL
// for(let i : number = 0; i < result.length; i++){
//   if(! sql.includes(`${result[i].middle_area.name}`))
//     sql += `INSERT INTO ${constant.schema}.middle_area(name) values("${result[i].middle_area.name}");`;
// }
// apiテーブルSQL
// for(let i : number = 0; i < 1/*result.length*/; i++){
//   sql += `INSERT INTO ${constant.schema}.api(id,name,address,open,url,middle_area_id,photo) values("${i + 1}","${result[i].name}","${result[i].address}","${result[i].open}","${result[i].coupon_urls.pc}","${result[i].middle_area.name}","${result[i].photo.pc.l}");`
// }
for(let i : number = 0; i < result.length; i++){
  sql += `INSERT INTO ${constant.schema}.api(name,address,open,url,middle_area_id,photo) values("${result[i].name}","${result[i].address}","${result[i].open}","${result[i].coupon_urls.pc}","${result[i].middle_area.name}","${result[i].photo.pc.l}");`
}

console.log(sql)
// connection.query(sql, function (error:any, results:any, fields:any) {
//   console.log(error)
//   console.log(results)
//   console.log(fields)
// });

// connection.end()