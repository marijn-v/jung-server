"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "testuser",
          email: "test@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
          isProfessional: true,
          isAdmin: false,
          status: "pending",
        },
        {
          name: "dummy",
          email: "a@a.com",
          password: bcrypt.hashSync("a", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
          isProfessional: false,
          isAdmin: false,
          status: "pending",
        },
        {
          name: "admin",
          email: "admin@admin.com",
          password: bcrypt.hashSync("JU-ng-202-!#!", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
          isProfessional: false,
          isAdmin: true,
          status: "approved",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
