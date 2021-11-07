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

class User extends Model
 {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public name!: string;
  public pass!: string;
  public status!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    pass: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    status: {
      type: new DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: new DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: new DataTypes.DATE,
      allowNull: false,
    }
  },
  {
    tableName: "users",
    sequelize, // passing the `sequelize` instance is required
  }
);
new User
async function doStuff() {
    const instance =  User.findByPk(1);
  // console.log(instance);
  return instance
}
// doStuff()

export { User,doStuff}

// 'use strict';
// var {
//   Model
// } = require('sequelize');
// module.exports = (sequelize:any, DataTypes:any) => {
//   class user extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models:any) {
//       // define association here
//     }
//   };
//   user.init({
//     id: DataTypes.INTEGER,
//     name: DataTypes.STRING,
//     pass: DataTypes.STRING,
//     status: DataTypes.INTEGER,
//     createdAt: DataTypes.DATE,
//     updatedAt: DataTypes.DATE
//   }, {
//     sequelize,
//     modelName: 'user'
//   });
//   return user;
// };
