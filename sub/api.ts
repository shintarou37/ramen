const { execSync } = require('child_process');
var fs = require('fs');
var constant = require('./.token');
var te = require('./result.js');
const url = 'http://webservice.recruit.co.jp/hotpepper/gourmet/v1'
const ramen_code = "G013"
const tokyo_code = "SA11"
const count : number = 30
const options = {
  flag: 'a'
};
// console.log(te.results.shop)
// console.log(results_api)
// const result_number : number = results_api.results.shop
var re : any 
for(let i : number = 1; i < 90; i += 30){
  var results_api : any = JSON.parse(execSync(`curl "${url}?key=${constant.token}&genre=${ramen_code}&count=${count}&service_area=${tokyo_code}&order&start=${i}=1&format=json"`, {maxBuffer: 10000 * 10000}));
  // var results_api = results_api.results
  re += (JSON.stringify(results_api.results.shop))
  re += ","
  // var pase = JSON.parse(results_api)
  // console.log(pase.results)
}
fs.writeFileSync('sub/result.js', re, options, (err:any) => {
  if (err) throw err;
  console.log('正常に書き込みが完了しました');
});
console.log(te.length)
// var result_number  = results_api.results.shop.length