import { Sequelize, Model } from 'sequelize';
import Api from './api';
import MiddleArea from './middle_area';
import User from './user';
import Like from './like';
import Match from './match';

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

let sequelize;
sequelize = new Sequelize(config.database, config.username, config.password, config);

// (1)モデルを一つのオブジェクトにまとめる
const db :any = {
  Api: Api.initialize(sequelize),
  MiddleArea: MiddleArea.initialize(sequelize),
  User: User.initialize(sequelize),
  Like: Like.initialize(sequelize),
  Match: Match.initialize(sequelize)
};

// (2)テーブル同士の関係を作成する
Object.keys(db).forEach(tableName => {
  const model = db[tableName];
  if (model.associate) {
    model.associate();
  }
});

export default db;