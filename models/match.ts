import { Sequelize, Model, DataTypes, Association ,Op} from 'sequelize';
import Api from './api';
import Message from './message';
import User from './user';

export default class Match extends Model {
  public id!: number; 
  public giver_id!: number; 
  public receiver_id!: number; 
  public api_id!: number; 
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
        giver_id: {
          type: new DataTypes.INTEGER,
          allowNull: false,
        },
        receiver_id: {
          type: new DataTypes.INTEGER,
          allowNull: false,
        },
        api_id: {
          type: new DataTypes.INTEGER,
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
          defaultValue: new Date()
        },
        updatedAt: {
          type: new DataTypes.DATE,
          allowNull: true,
          defaultValue: new Date()
        }
      },
      { sequelize, tableName: 'matchis', paranoid: true}
    );
    return this;
  }
  public static associate() {
    this.belongsTo(Api, { foreignKey: 'api_id'});
    this.belongsTo(User, { foreignKey: 'giver_id', as: 'Giver'});
    this.belongsTo(User, { foreignKey: 'receiver_id', as: 'Receiver'});
    this.hasMany(Message, { foreignKey: 'match_id'});
  }
  public static index(user_id: number) {
    return this.findAll({
      where: { 
        [Op.or]: [
          {giver_id: user_id},
          {receiver_id: user_id}
        ]
      },
      include: [
        {model: User, required: false, as: 'Giver',
          where: {id: {[Op.ne]: user_id}}
        },
        {model: User, required: false, as: 'Receiver',
          where: {id: {[Op.ne]: user_id}}
        },
        {model: Api, required: true}
      ]
    }).then((results: any)=>{
      return results;
    })
  }
  public static register(req: any){
    let match = this.build();
    match.giver_id = req.session.user.id;
    match.receiver_id = req.query.user_id;
    match.api_id = req.query.id;
    return match.save().then((result: any)=>{
      return result
    })
  }

  public static getTalk(match_id: number, user_id: number) {
    return this.findOne({
      where: {id: match_id},
      include: [
        {model: Message, required: false,
          include: [
            {model: User, required: true}
          ] 
        },
        {model: Api, required: true},
        {model: User, required: false, as: 'Giver',
          where: {id: {[Op.ne]: user_id}}
        },
        {model: User, required: false, as: 'Receiver',
          where: {id: {[Op.ne]: user_id}}
        },
      ]
    }).then((result: any) =>{
      return result
    })
  }
}