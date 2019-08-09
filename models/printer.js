'use strict';

const Model = require('sequelize').Model;
const sequelize = require('.././config/db');
class Printer extends Model {

}

Printer.init({
  printer_name: sequelize.Sequelize.STRING,
  printer_ip: sequelize.Sequelize.STRING,
  status: sequelize.Sequelize.ENUM('active','inactive')
}, {
  sequelize,
  modelName: 'printer'
});

module.exports = Printer;
//
// module.exports = (sequelize, DataTypes) => {
//   const printer = Sequelize.define('printer', , {});
//   printer.associate = function(models) {
//     // associations can be defined here
//   };
//   return printer;
// };

