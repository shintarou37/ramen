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

import {Api} from "./api";

const sequelize = new Sequelize("mysql://root@localhost:3306/ramen");

class MiddleArea extends Model
 {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public name!: string;
  public getProjects!: HasManyGetAssociationsMixin<Api>; // Note the null assertions!
  public addProject!: HasManyAddAssociationMixin<Api, number>;
  public hasProject!: HasManyHasAssociationMixin<Api, number>;
  public countProjects!: HasManyCountAssociationsMixin;
  public createProject!: HasManyCreateAssociationMixin<Api>;

  // You can also pre-declare possible inclusions, these will only be populated if you
  // actively include a relation.
  public readonly api?: Api[]; // Note this is optional since it's only populated when explicitly requested in code

  public static associations: {
    api: Association<MiddleArea, Api>;
  };
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
    tableName: "middle_area",
    sequelize, 
  }
);

new MiddleArea
MiddleArea.hasMany(Api, {
  sourceKey: "id",
  foreignKey: "middle_area_id",
  as: "api", // this determines the name in `associations`!
});

function getIndex() {
  const get_index_result = MiddleArea.findAll({include:[MiddleArea.associations.api]});
  return get_index_result
}
function getMiddleArea() {
  const instance = MiddleArea.findByPk(1,{include:[MiddleArea.associations.api]});
  // console.log(instance)
  return instance
}
// getMiddleArea()

export { MiddleArea, getIndex, getMiddleArea }