import { Sequelize, Model, DataTypes } from 'sequelize';
import { HasManyCreateAssociationMixin } from 'sequelize';
import Api from './api';

export default class MiddleArea extends Model {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public name!: string;

  // (3) 作成したMiddleAreaをMiddleAreaIdをもつApiを作成するメソッド
  public createApi!: HasManyCreateAssociationMixin<Api>;

  // (1)初期化
  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: new DataTypes.STRING,
          allowNull: false,
        },
        createdAt: {
          type: new DataTypes.DATE,
          allowNull: true,
          defaultValue: new Date()
        },
        updatedAt: {
          type: new DataTypes.DATE,
          allowNull: true,
          defaultValue: new Date()
        }
      },
      { sequelize, tableName: 'middle_area' }
    );
    return this;
  }

  // (2)テーブル関係を記述
  public static associate() {
    this.hasMany(Api, {
      sourceKey: 'id',
      foreignKey: 'middle_area_id',
      constraints: false
    });
  }
  public static index() {
    return this.findAll({
      attributes: { exclude: ['createdAt','updatedAt'] }
    }).then((results:any)=>{
      return results
    })
  }
    // public static index() {
  //   return this.findAll({
  //     attributes: { exclude: ['createdAt','updatedAt'] },
  //     include:[Api]
  //   }).then((results:any)=>{
  //     return results
  //   })
  // }
}