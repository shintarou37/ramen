import { Sequelize, Model, DataTypes } from 'sequelize';
import { HasManyCreateAssociationMixin } from 'sequelize';
import Api from './api';

export default class MiddleArea extends Model {
  public createApi!: HasManyCreateAssociationMixin<Api>;

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
        },
        updatedAt: {
          type: new DataTypes.DATE,
          allowNull: true,
        }
      },
      { sequelize, tableName: 'middle_area' }
    );
    return this;
  }

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
    }).then((results:any)=> {
      return results;
    }).catch(()=> {
      return false;
    })
  }
}