const { execSync } = require('child_process');
const constant= require('./.token');
const url = 'http://webservice.recruit.co.jp/hotpepper/gourmet/v1'
const key = 'key'
const ramen_code = "G013"
let a = execSync(`curl "${url}?key=${constant.token}&genre=${ramen_code}&count=2&format=json"`, {maxBuffer: 10000 * 10000});

var aa = JSON.parse(a)
console.log(JSON.stringify(aa))
