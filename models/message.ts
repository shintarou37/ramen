import { Sequelize, Model, DataTypes, Association ,Op} from 'sequelize';
import User from './user';
import Match from './match';
import Api from './api';


export default class Message extends Model {
  public id!: number; 
  public match_id!: number; 
  public sender_id!: number; 
  public content!: string; 
  public deletedAt!: Date;
  public createdAt!: Date;
  public updatedAt!: Date;

  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
        },
        match_id: {
          type: new DataTypes.INTEGER,
          allowNull: false,
        },
        sender_id: {
          type: new DataTypes.INTEGER,
          allowNull: false,
        },
        content: {
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
          allowNull: true,
        },
        updatedAt: {
          type: new DataTypes.DATE,
          allowNull: true,
        }
      },
      { sequelize, tableName: 'messages', paranoid: true}
    );
    return this;
  }
  public static associate() {
    this.belongsTo(Match, {foreignKey: 'match_id'});
    this.belongsTo(User, {foreignKey: 'sender_id'});
  }
  public static register(match_id: number, user_id: number, content: string){
    let message = this.build();
    message.match_id = match_id;
    message.sender_id = user_id;
    message.content = content;
    return message.save().then((result: any)=>{
      return result
    })
  }
};

