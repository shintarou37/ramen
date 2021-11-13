import { Sequelize, Model } from 'sequelize';
import Api from './api';
import MiddleArea from './middle_area';
// const { database, username, password, host, dialect } = require('../config');
// // sequelizeインスタンス作成
// const sequelize = new Sequelize(database, username, password, {
//   host,
//   dialect
// });
const path = require('path');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
// console.log(config)

let sequelize;

sequelize = new Sequelize(config.database, config.username, config.password, config);


// (1)モデルを一つのオブジェクトにまとめる
const db :any = {
  Api: Api.initialize(sequelize),
  MiddleArea: MiddleArea.initialize(sequelize)
};

// (2)テーブル同士の関係を作成する
Object.keys(db).forEach(tableName => {
  const model = db[tableName];
  if (model.associate) {
    model.associate();
  }
});

export default db;
// 'use strict';

// var fs = require('fs');
// var path = require('path');
// var Sequelize = require('sequelize');
// // index.js
// var basename = path.basename(__filename);
// // development
// var env = process.env.NODE_ENV || 'development';
// /*{
//   username: 'root',
//   password: null,
//   database: 'ramen',
//   host: 'vff',
//   dialect: 'mysql'
// }*/
// const config = require(__dirname + '/../config/config.json')[env];
// let db:any = {};


// let sequelize:any;
// if (config.use_env_constiable) {
//   // config.use_env_constiable == null
//   sequelize = new Sequelize(process.env[config.use_env_constiable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }
// // console.log(fs)
// fs
//   .readdirSync(__dirname)
//   .filter((file:any) => {
//     console.log(typeof file)
//     // console.log((file.indexOf('.') !== 0) && (file !== basename) /*&& (file.slice(-3) === ('.js' || '.ts'))*/)
//     // file フォルダ内にある全てのファイル名(拡張子つき)api.ts index.ts
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach((file:any) => {
//     console.log(file)

//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });
// // db = {モデル名:model}
// // console.log(db)

// Object.keys(db).forEach(modelName=> {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;
// module.exports = db;
