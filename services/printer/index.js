'use strict';
const PrinterController = require('./controllers/PrinterController.js');

module.exports = function (fastify, opts, next) {
    fastify.get('/printers', PrinterController.getPrinters)
  fastify.post('/printers', PrinterController.createPrinters)
  fastify.get('/printers/:id', PrinterController.getPrinter)
  fastify.put('/printers/:id', PrinterController.updatePrinter)
  fastify.delete('/printers/:id', PrinterController.deletePrinter)

    next()
};


// If you prefer async/await, use the following
//
// module.exports = async function (fastify, opts) {
//   fastify.get('/example', async function (request, reply) {
//     return 'this is an example'
//   })
// }
