
import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize = new Sequelize("mysql://root:asd123@localhost:3306/ramen");

class MiddleArea extends Model {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public name!: string;
  public createdAt!: number | null; // for nullable fields
  public updatedAt!: number | null; // for nullable fields

  static associate(models:any) {
    // define association here
  }
  static te() {
    console.log("iorioeghio")
  }

}

MiddleArea.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    }
  },
  {
    tableName: "user",
    sequelize, // passing the `sequelize` instance is required
  }
);
module.exports = MiddleArea

// async function doStuffWithUserModel() {
//   const newUser = await MiddleArea.create({
//     name: "Johnny",
//   });
//   console.log(newUser.id, newUser.name,);

//   const foundUser = await MiddleArea.findOne({ where: { name: "Johnny" } });
//   if (foundUser === null) return;
//   console.log(foundUser.name);
// }


// module.exports = da
// var {
//   Model
// } = require('sequelize');
// module.exports = (sequelize:any, DataTypes:any) => {
//   class middle_area extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models:any) {
//       // define association here
//     }
//     static test(models:any) {
//       console.log("start")
//       // models.findAll().then((results)=>{
//       //   console.log(results)
//       // })
//     }

//   };
//   middle_area.init({
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       autoIncrement: true,
//       primaryKey: true,
//       defaultValue: null
//     },
//     name: DataTypes.STRING,
    
//   }, {
//     sequelize,
//     modelName: 'middle_area',
//     classMethods: {
//       test1: function () {
//         console.log("fengoijergegseger")
//       },
//     }
//   });
//   return middle_area;
  
// };