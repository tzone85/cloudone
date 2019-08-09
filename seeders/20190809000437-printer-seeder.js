'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('printers', [
          {
              printer_name: 'Printer1',
              printer_ip: '321.12.321.231',
              status: 'active',
              created_at: new Date(),
              updated_at: new Date()
          },
          {
              printer_name: 'Printer2',
              printer_ip: '999.32.321.231',
              status: 'active',
              created_at: new Date(),
              updated_at: new Date()

          }, {
              printer_name: 'Printer3',
              printer_ip: '777.12.777.777',
              status: 'inactive',
              created_at: new Date(),
              updated_at: new Date()

          }
      ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
