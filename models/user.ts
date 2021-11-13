import { Sequelize, Model, DataTypes } from 'sequelize';
import { HasManyCreateAssociationMixin } from 'sequelize';
import Api from './api';

export default class User extends Model {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public name!: string;
  public pass!: string;
  public status!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  // (3) 作成したUserをUserIdをもつApiを作成するメソッド
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
          defaultValue: new Date()
        },
        updatedAt: {
          type: new DataTypes.DATE,
          allowNull: false,
          defaultValue: new Date()
        }
      },
      { sequelize, tableName: 'users' }
    );
    return this;
  }
}