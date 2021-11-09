import {
  Sequelize,
  Model,
  DataTypes,
  HasManyGetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyHasAssociationMixin,
  Association,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
} from "sequelize";

import {
  Api,
} from "./api";

const sequelize = new Sequelize("mysql://root@localhost:3306/ramen");

class MiddleArea extends Model
 {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public name!: string;
}

MiddleArea.init(
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
  {
    tableName: "api",
    sequelize, 
  }
);
MiddleArea.hasMany(Api, {
  sourceKey: "id",
  foreignKey: "middle_area_id",
  as: "middle_areas", // this determines the name in `associations`!
});
new MiddleArea
function getIndex() {
  const get_index_result = MiddleArea.findAll({include:[MiddleArea.associations.Api]});
  return get_index_result
}
function getMiddleArea() {
  const instance = MiddleArea.findByPk(1,{include:[MiddleArea.associations.Api]});
  console.log(typeof instance)
  return instance
}

export { MiddleArea, getIndex, getMiddleArea }