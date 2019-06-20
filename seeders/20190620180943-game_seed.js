'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Games', [{
      title: "Qbert",
      price: 50,
      releaseYear: 1982,
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Donkey Kong",
      price: 50,
      releaseYear: 1981,
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Centipede",
      price: 75,
      releaseYear: 1981,
      active: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Games', null, {})
  }
};
