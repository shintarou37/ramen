import { Sequelize, Model, DataTypes, where } from 'sequelize';
import { HasManyCreateAssociationMixin } from 'sequelize';
import Like from './like';
import bcrypt from 'bcrypt'

export default class User extends Model {

  public id!: number; 
  public name!: string;
  public pass!: string;
  public deletedAt!: Date;
  public createdAt!: Date;
  public updatedAt!: Date;

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
          defaultValue: DataTypes.NOW
        },
        updatedAt: {
          type: new DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW
        }
      },
      { sequelize, tableName: 'user' }
    );
    return this;
  }

  public static associate() {
    this.hasMany(Like, {
      sourceKey: 'id',
      foreignKey: 'user_id',
    });
  }
  public static sign_up(body: any) {
    let user = this.build()
    user.name = body.name
    let salt = bcrypt.genSaltSync(10);
    let new_password = bcrypt.hashSync(body.pass, salt);
    user.pass = new_password

    return user.save().then((result:any)=>{
      return result
    })
  }

  public static sign_in(body: any) {
    return this.findOne({
      where: { name:body.name }
    }).then((result:any) =>{
      return result.dataValues
    })
  }
}