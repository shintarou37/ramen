import { Sequelize, Model, DataTypes } from 'sequelize';
import { HasManyCreateAssociationMixin } from 'sequelize';

export default class User extends Model {
  // public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  // public name!: string;
  // public pass!: string;
  // public status!: number;

  // public readonly createdAt!: Date;
  // public readonly updatedAt!: Date;


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
        pass: {
          type: new DataTypes.STRING,
          allowNull: false,
        },
        deletedAt: {
          type: new DataTypes.DATE,
          allowNull: true,
          defaultValue: null
        },
        createdAt: {
          type: new DataTypes.DATE,
          allowNull: false,
          defaultValue: new Date()
        },
        updatedAt: {
          type: new DataTypes.DATE,
          allowNull: false,
          defaultValue: new Date()
        }
      },
      { sequelize, tableName: 'user', paranoid: true }
    );
    return this;
  }
}