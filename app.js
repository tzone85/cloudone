'use strict'

require('dotenv').config();

const path = require('path')
const AutoLoad = require('fastify-autoload')
const {graphiqlFastify, graphqlFastify} = require('fastify-graphql');
const PrinterSchema = require('./schema/schema');

module.exports = function (fastify, opts, next) {
  // Place here your custom code!

    fastify.register(require('fastify-cors'), {
        // put your options here
         methods: ['OPTIONS','GET', 'PUT', 'POST','DELETE'],
        options: Object.assign({
            origin: true,
            allowedHeaders:'*'
        }, opts)
    })

  fastify.register(graphqlFastify, {
    prefix: '/graphql',
    graphql: {
      schema: PrinterSchema,
    },
  });

  fastify.register(graphiqlFastify, {
    prefix: '/graphiql',
    graphiql: {
      endpointURL: '/graphql',
    }
  });

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in services
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'services'),
    options: Object.assign({}, opts)
  })

  // Make sure to call next when done
  next()
}
