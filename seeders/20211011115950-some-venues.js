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
      {
        name: "Koffie & Ambacht",
        address: "Ebenhaëzerstraat 52A, 3083 RP Rotterdam",
        link: "http://www.koffieenambacht.nl/",
        latitude: 51.89002,
        longitude: 4.4805,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "OCCII",
        address: "Amstelveenseweg 134, 1075 XL Amsterdam",
        link: "https://occii.org/",
        latitude: 52.35436,
        longitude: 4.85535,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("venues", null, {});
  },
};
