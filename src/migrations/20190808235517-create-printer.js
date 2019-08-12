'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('printers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      printer_name: {
        type: Sequelize.STRING
      },
      printer_ip: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM('active', 'inactive')
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('printers')
  }
}