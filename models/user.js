"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasMany(models.event, { as: "organizer", foreignKey: "userId" }); // organizer
      user.belongsToMany(models.event, {
        // attending
        through: "event_users",
        foreignKey: "userId",
        as: "attending",
      });
    }
  }
  user.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false },
      isProfessional: DataTypes.BOOLEAN,
      isAdmin: DataTypes.BOOLEAN,
      status: {
        type: DataTypes.ENUM("pending", "approved"),
        defaultValue: "pending",
      },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
