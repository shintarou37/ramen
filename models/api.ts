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

class Api extends Model
 {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public name!: string;
  public address!: string;
  public open!: string;
  public url!: number;
  public middle_area_id!: number;
}

Api.init(
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
    address: {
      type: new DataTypes.STRING,
      allowNull: false,
    },
    open: {
      type: new DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: new DataTypes.STRING,
      allowNull: false,
    },
    middle_area_id: {
      type: new DataTypes.INTEGER,
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
new Api
function getApi() {
  const instance = Api.findByPk(1);
  console.log(typeof instance)
  return instance
}

export { Api, getApi }

