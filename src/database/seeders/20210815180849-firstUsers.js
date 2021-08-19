'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {         
          firstName: "usuario1",
          lastName: "usuario1",
          email: "usuario1@email.com",
          username:"usuario1",
          password: bcrypt.hashSync('prueba', 8),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "curso",
          lastName: "node",
          username:"cursonode",
          password: bcrypt.hashSync('prueba', 8),
          email: "curso@email.com.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};