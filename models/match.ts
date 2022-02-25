import { Sequelize, Model, DataTypes, Association ,Op} from 'sequelize';
import Api from './api';
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
      { sequelize, tableName: 'matchis'}
    );
    return this;
  }
  public static associate() {
    this.belongsTo(Api, { foreignKey: 'api_id'});
    this.belongsTo(User, { foreignKey: 'giver_id'});
    this.belongsTo(User, { foreignKey: 'receiver_id'});
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
}