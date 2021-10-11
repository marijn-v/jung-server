"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("venues", [
      {
        name: "Roodkapje",
        address: "Delftseplein 39, 3013AA, Rotterdam",
        link: "https://roodkapje.org",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Worm",
        address: "Boomgaardsstraat 71, 3012XA, Rotterdam",
        link: "https://worm.org",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("venues", null, {});
  },
};
