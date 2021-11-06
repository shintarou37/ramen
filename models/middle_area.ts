'use strict';
var {
  Model
} = require('sequelize');
module.exports = (sequelize:any, DataTypes:any) => {
  class middle_area extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      // define association here
    }
  };
  middle_area.init({
    name: DataTypes.STRING,
    id: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'middle_area',
  });
  return middle_area;
};