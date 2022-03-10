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
        },
        updatedAt: {
          type: new DataTypes.DATE,
          allowNull: true,
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
  public static get(id: string) {
    return this.findAll({
      attributes:['id'],
      where: { 
        api_id : id
      },
      include: [
        {model: User, 
          attributes: [
            'id',
            'name',
            [Sequelize.fn('date_format', Sequelize.col('User.createdAt'), '%Y年%m月%d日'), 'createdAt'],
          ],
          required: true,
        },
        {model: Api,
          attributes: ['id','name'],
          required: true
        }
      ]
    }).then((results: any)=> {
      return results;
    }).catch(()=> {
      return false;
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