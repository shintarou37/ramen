import { Sequelize, Model, DataTypes } from 'sequelize';
import Like from './like';
import bcrypt from 'bcrypt'

export default class User extends Model {

  public id!: number; 
  public name!: string;
  public pass!: string;
  public deletedAt?: Date;
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
        },
        updatedAt: {
          type: new DataTypes.DATE,
          allowNull: false,
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
  public static sign_up(name: string, pass: string) {
    let user = this.build();
    user.name = name;
    let salt = bcrypt.genSaltSync(10);
    let new_password = bcrypt.hashSync(pass, salt);
    user.pass = new_password;

    return user.save().then((result:any)=> {
      return result;
    }).catch(()=>{
      return false;
    })
  }

  public static sign_in(name: string) {
    return this.findOne({
      attributes: ['id','name','pass'],
      where: {name: name},
      include: [
        {model:Like, required: false, attributes: ['api_id']}
      ]
    }).then((result: any)=>{
      if(result){
        return result.dataValues;
      }
      throw new Error();
    }).catch(()=>{
      return false
    })
  }
}