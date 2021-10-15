"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("venues", [
      {
        name: "Roodkapje",
        address: "Delftseplein 39, 3013AA, Rotterdam",
        link: "https://roodkapje.org",
        latitude: 51.92485,
        longitude: 4.47447,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Worm",
        address: "Boomgaardsstraat 71, 3012XA, Rotterdam",
        link: "https://worm.org",
        latitude: 51.91594,
        longitude: 4.47626,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("venues", null, {});
  },
};
