const mysql = require('mysql');
const result = require('./result');
var constant = require('./.token');
var connection

connection = mysql.createConnection({
  host     : constant.host,
  user     : constant.user,
  database : constant.schema
});

connection.connect(function(err: any) {
  if (err) {
      console.error("DB connection error =", err);
      return;
  }
});