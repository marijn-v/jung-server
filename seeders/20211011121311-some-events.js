"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("events", [
      {
        image:
          "https://64.media.tumblr.com/4457ac2fad803c005e1a377a42b69cb7/tumblr_inline_nxe3k8kjQC1rhiodp_640.jpg",
        date: "oct 29",
        link: "https://m-i-m-a.tumblr.com",
        description: "ignatz, zaimph and more",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        venueId: 2,
      },
      {
        image:
          "https://64.media.tumblr.com/c729118c544c5b659a51ef1f228fe7e0/tumblr_inline_plu24oWoGS1rhiodp_500.jpg",
        date: "nov 23",
        link: "https://m-i-m-a.tumblr.com",
        description: "mittland och leo, hexeneiche and more",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        venueId: 1,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("events", null, {});
  },
};
