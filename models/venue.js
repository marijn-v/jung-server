"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class venue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      venue.hasMany(models.event);
    }
  }
  venue.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      link: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "venue",
    }
  );
  return venue;
};
