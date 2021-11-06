'use strict';
const {
  Model :any
} = require('sequelize');
module.exports = (sequelize:any, DataTypes:any) => {
  class api extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      // define association here
    }
  };
  api.init({
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    open: DataTypes.STRING,
    url: DataTypes.STRING,
    middle_area_id: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'api',
  });
  return api;
};