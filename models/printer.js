'use strict';
module.exports = (sequelize, DataTypes) => {
  const printer = sequelize.define('printer', {
    printer_name: DataTypes.STRING,
    printer_ip: DataTypes.STRING,
    status: DataTypes.ENUM('active', 'inactive')
  }, {});
  printer.associate = function(models) {
    // associations can be defined here
  };
  return printer;
};