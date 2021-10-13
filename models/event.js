"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      event.belongsTo(models.venue);
      event.belongsTo(models.user, { as: "organizer", foreignKey: "userId" }); // organizer
      event.belongsToMany(models.user, {
        // attending
        through: "event_users",
        foreignKey: "eventId",
        as: "attending",
      });
    }
  }
  event.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      image: { type: DataTypes.STRING, allowNull: false },
      date: { type: DataTypes.DATE, allowNull: false },
      link: { type: DataTypes.STRING },
      description: { type: DataTypes.TEXT, allowNull: false },
      userId: DataTypes.INTEGER,
      venueId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "event",
    }
  );
  return event;
};
