'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      uid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      role: {
        type: Sequelize.ENUM('standard', 'administrator'),
        allowNull: false,
        defaultValue: 'standard',
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: true,
        default: null,
      },
      middle_name: {
        type: Sequelize.STRING,
        allowNull: true,
        default: null,
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: true,
        default: null,
      },
      primary_email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      secondary_email: {
        type: Sequelize.STRING,
        allowNull: true,
        default: null,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: true,
        default: null,
      },
      gender: {
        type: Sequelize.ENUM('m', 'f', 'o'),
        allowNull: true,
        default: '0',
      },
      avatar: {
        type: Sequelize.STRING,
        default: 'avatar.png',
      },
      deleted: {
        type: Sequelize.ENUM('0', '1'),
        default: '0',
      },
      active: {
        type: Sequelize.ENUM('0', '1'),
        default: '1',
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }, {
      tableName: 'users',
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  },
};
