"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("events", [
      {
        title: "ignatz, zaimph and more",
        image:
          "https://64.media.tumblr.com/4457ac2fad803c005e1a377a42b69cb7/tumblr_inline_nxe3k8kjQC1rhiodp_640.jpg",
        date: "oct 29",
        link: "https://m-i-m-a.tumblr.com",
        description:
          "Solo project of Marcia Basset aka Zaïmph builds ominous walls of sound in layers, while the Lisbon duo Manuel Mota & Margarida Garcia improvise on electric bass and guitar. Ignatz aka Belgium’s Bram Devens creates skeletal folk songs.",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        venueId: 2,
      },
      {
        title: "mittland och leo, hexeneiche and more",
        image:
          "https://64.media.tumblr.com/c729118c544c5b659a51ef1f228fe7e0/tumblr_inline_plu24oWoGS1rhiodp_500.jpg",
        date: "nov 23",
        link: "https://m-i-m-a.tumblr.com",
        description:
          "Organpop and atonal synth weirdness / Improvised drones / Two cheerful beat making boys",
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
