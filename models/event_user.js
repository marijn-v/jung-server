"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class event_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      event_user.belongsTo(models.user);
      event_user.belongsTo(models.event);
    }
  }
  event_user.init(
    {
      eventId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "event_user",
    }
  );
  return event_user;
};
