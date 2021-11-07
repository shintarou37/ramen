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
      type: new DataTypes.STRING,
      allowNull: false,
    },
    pass: {
      type: new DataTypes.STRING,
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
    sequelize, 
  }
);
new User
function getUser() {
  const instance = User.findByPk(1);
  console.log(typeof instance)
  return instance
}

export { User, getUser }