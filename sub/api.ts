const { execSync } = require('child_process');
var fs = require('fs');
var constant = require('./.token');
// var te = require('./result.js');
const url = 'http://webservice.recruit.co.jp/hotpepper/gourmet/v1'
const ramen_code = "G013"
const tokyo_code = "SA11"
const count : number = 30
const options = {
  flag: 'a'
};

var re : any 
// for(let i : number = 1; i < 15000; i += 30){
//   console.log(`${i} iの回数`)
//   var results_api : any = JSON.parse(execSync(`curl "${url}?key=${constant.token}&genre=${ramen_code}&count=${count}&service_area=${tokyo_code}&order=1&start=${i}&format=json"`, {maxBuffer: 10000 * 10000}));
//   re += (JSON.stringify(results_api.results.shop))
//   re += ","
//   console.log(`${results_api.results.shop.length}`)
// }
// fs.writeFileSync('sub/result.json', re, options, (err:any) => {
//   if (err) throw err;
//   console.log('正常に書き込みが完了しました');
// });
var results_api : any = JSON.parse(execSync(`curl "${url}?key=${constant.token}&genre=${ramen_code}&address=東京都&count=${count}&order=1&start=71&format=json"`, {maxBuffer: 10000 * 10000}));
console.log(JSON.stringify(results_api))