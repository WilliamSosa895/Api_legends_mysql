'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Legends', {
      id: {
        allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER
      },
      name:         { type: Sequelize.STRING,  allowNull: false },
      status:       { type: Sequelize.STRING,  allowNull: false },
      last_club:    { type: Sequelize.STRING },
      titles_count: { type: Sequelize.INTEGER, defaultValue: 0 },
      goals_count:  { type: Sequelize.INTEGER, defaultValue: 0 },
      ballon_dors:  { type: Sequelize.INTEGER, defaultValue: 0 },
      world_cups:   { type: Sequelize.INTEGER, defaultValue: 0 },
      createdAt:    { allowNull: false, type: Sequelize.DATE },
      updatedAt:    { allowNull: false, type: Sequelize.DATE }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Legends');
  }
};

