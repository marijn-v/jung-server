"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("events", [
      {
        title: "ignatz, zaimph and more",
        image:
          "https://64.media.tumblr.com/4457ac2fad803c005e1a377a42b69cb7/tumblr_inline_nxe3k8kjQC1rhiodp_640.jpg",
        date: "2021-10-28",
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
        date: "2021-11-23",
        link: "https://m-i-m-a.tumblr.com",
        description:
          "Organpop and atonal synth weirdness / Improvised drones / Two cheerful beat making boys",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        venueId: 1,
      },
      {
        title: "louise landes levi, hans plomp and more",
        image:
          "https://64.media.tumblr.com/ad2ba47465cf1fa7fab1f2b7f3f70c16/tumblr_inline_nwh136bqNP1rhiodp_640.jpg",
        date: "2022-07-18",
        link: "https://m-i-m-a.tumblr.com/post/131489587479/mima-40-louise-landes-levi-hum-hans-plomp",
        description: "poetry / traditional bowed harp / ragas",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        venueId: 3,
      },
      {
        title: "yader, ido bukelman",
        image:
          "https://64.media.tumblr.com/f24849bef5e099e7913323480da83998/tumblr_inline_ntzrmiKfV01rhiodp_540.jpg",
        date: "2022-09-11",
        link: "https://m-i-m-a.tumblr.com/post/128098034939/mima-42-yader-it-ve-be-ido-bukelman-isr",
        description: "abstract electronics / improv / solo guitar",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        venueId: 3,
      },
      {
        title: "raajmahal, head of wantastiquet and more",
        image:
          "https://64.media.tumblr.com/b6b8d7a356a100e6c84a556f32a372ba/tumblr_inline_plu25bQqhD1rhiodp_400.jpg",
        date: "2022-09-11",
        link: "https://m-i-m-a.tumblr.com/post/71314412769/mima-20-raajmahal-us-head-of-wantastiquet-be",
        description: "psych / soundscape / heavenly vocals / ghaita",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        venueId: 3,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("events", null, {});
  },
};
