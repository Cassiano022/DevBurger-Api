'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('product', { 
      id: {
        type: Sequelize.INTEGER, // Corrigido de INTERGER para INTEGER
        allowNull: false,
        primaryKey: true, 
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER, // Correto, se o preço for um número inteiro
        allowNull: false,
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      path: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: { // Correto, usar createdAt
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: { // Correto, usar updatedAt
        type: Sequelize.DATE,
        allowNull: false
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('product')
  },
};
