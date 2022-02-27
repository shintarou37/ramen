import { Sequelize, Model, DataTypes, Association ,Op} from 'sequelize';
import Api from './api';
import User from './user';

export default class Like extends Model {
  public id!: number; 
  public api_id!: number; 
  public user_id!: number; 
  public level!: number; 
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
        api_id: {
          type: new DataTypes.INTEGER,
          allowNull: false,
        },
        user_id: {
          type: new DataTypes.INTEGER,
          allowNull: false,
        },
        level: {
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
      { sequelize, tableName: 'like', paranoid: true}
    );
    return this;
  }

  public static associate() {
    this.belongsTo(Api, { foreignKey: 'api_id'});
    this.belongsTo(User, { foreignKey: 'user_id', constraints: false });
  }
  public static index(req: any) {
    return this.findAll({
      where: { 
        api_id : req.params.id
      },
      include: [
        {model: User, required: true},
        {model: Api, required: true}
      ]
    }).then((results: any)=>{
      return results;
    })
  }

  public static register(req : any){
    let like = this.build();
    like.api_id = req.params.id;
    like.user_id = req.session.user.id;
    like.level = 1;
    return like.save().then((result:any)=>{
      return result
    });
  };

  public static delete(req : any){
    return this.destroy({
      where: {
        id: req.query.like_id
      }
    }).then((result:any)=>{
      return result
    });
  };
};