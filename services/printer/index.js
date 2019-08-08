'use strict'

module.exports = function (fastify, opts, next) {
    fastify.get('/printer', function (request, reply) {
        reply.send('this is a printer')
    })

    next()
}

// If you prefer async/await, use the following
//
// module.exports = async function (fastify, opts) {
//   fastify.get('/example', async function (request, reply) {
//     return 'this is an example'
//   })
// }
