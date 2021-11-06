'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize:any, DataTypes:any) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      // define association here
    }
  };
  user.init({
    name: DataTypes.STRING,
    pass: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};