const printer = require('../../../models/printer')
// const Printer = require('')

exports.getPrinters = async (request, reply) => {
  // console.log
  printer.findAll({ attributes: [`id`, `printer_name`, `printer_ip`, `status`] })
    .then(response => reply.send(response))
}
// const Printer = require('')

exports.createPrinters = async (request, reply) => {
  const model = printer.save({
        printer_name: request.body.printer_name,
        printer_ip: request.body.printer_ip,
        status: request.body.status,
        created_at: new Date(),
        updated_at: new Date()
      }).then( response => {
      reply.send(response)
    }).catch(error => reply.send(error.message))
}

exports.getPrinter = async (request, reply) => {
  console.log('Request', request.params.id)
  printer.findByPk(request.params.id, { attributes: [`id`, `printer_name`, `printer_ip`, `status`] })
    .then(response => reply.send(response))
}

exports.updatePrinter = async (request, reply) => {
  printer.findByPk(request.params.id, { attributes: [`id`, `printer_name`, `printer_ip`, `status`] })
    .then(response => {
      response.save({
        printer_name: request.body.printer_name,
        printer_ip: request.body.printer_ip,
        status: request.body.status,
        updated_at: new Date()
      })
      reply.send('')
    }).catch(error => reply.send(error.message))
}

exports.deletePrinter = async (request, reply) => {
  printer.findByPk(request.params.id, { attributes: [`id`] })
    .then(response => {
      response.destroy()
      reply.send('')
    }).catch(error => reply.send(error.message))
}