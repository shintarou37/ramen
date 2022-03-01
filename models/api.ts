import { Sequelize, Model, DataTypes, Association ,Op} from 'sequelize';
import Like from './like';
import MiddleArea from './middle_area';
import User from './user';

export default class Api extends Model {
  // public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  // public name!: string;
  // public address!: string;
  // public open!: string;
  // public url!: number;
  // public middle_area_id!: number;

  // public readonly createdAt!: Date;
  // public readonly updatedAt!: Date;

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
        address: {
          type: new DataTypes.STRING,
          allowNull: false,
        },
        open: {
          type: new DataTypes.STRING,
          allowNull: false,
        },
        url: {
          type: new DataTypes.STRING,
          allowNull: false,
        },
        middle_area_id: {
          type: new DataTypes.INTEGER,
          allowNull: false,
        },
        photo: {
          type: new DataTypes.INTEGER,
          allowNull: false,
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
      { sequelize, tableName: 'api' }
    );
    return this;
  }

  public static associate() {
    this.belongsTo(MiddleArea, { foreignKey: 'middle_area_id', constraints: false });
    this.hasMany(Like, {
      sourceKey: 'id',
      foreignKey: 'api_id',
    });
  }
  public static search(name: string, area: string, offset:number){
    return this.findAndCountAll({
      attributes: { exclude: ['createdAt','updatedAt'] },
      where: {
        name: {[Op.like]: name},
        middle_area_id: {[Op.like]: area}
      }, 
      limit: 20,
      offset: offset,
      include: [
        {model:Like, required:false, attributes: ['id']}
        // include: [User]}
      ]
    }).then((results:any)=>{
      return results
    })
  }
}