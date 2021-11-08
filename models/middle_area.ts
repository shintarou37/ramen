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
new MiddleArea
function getMiddleArea() {
  const instance = MiddleArea.findByPk(1);
  console.log(typeof instance)
  return instance
}

export { getMiddleArea }