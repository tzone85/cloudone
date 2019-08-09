const printer = require('../../../models/printer')
// const Printer = require('')

exports.getPrinters = async (request, reply) => {
  // console.log
  const models = printer.findAll({ attributes: [`id`, `printer_name`, `printer_ip`, `status`] })
    .then(response => reply.send(response))
}