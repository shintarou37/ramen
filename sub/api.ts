const { execSync } = require('child_process');
var fs = require('fs');
var constant = require('./.token');
const url = 'http://webservice.recruit.co.jp/hotpepper/gourmet/v1'
const ramen_code = "G013"
const tokyo_code = "SA11"
const count : number = 30


var results_api = JSON.stringify(JSON.parse(execSync(`curl "${url}?key=${constant.token}&genre=${ramen_code}&count=${count}&service_area=${tokyo_code}&order=1&format=json"`, {maxBuffer: 10000 * 10000})));
// console.log(results_api)

// for(let i : number = 0; i < num; i++);
fs.writeFileSync('sub/result.json', results_api);