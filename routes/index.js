
const routes = [
    {
        method: 'GET',
        url: '/',
        schema: {
            querystring: {
                name: { type: 'string' },
                excitement: { type: 'integer' }
            },
            response: {
                200: {
                    type: 'object',
                    properties: {
                        hello: { type: 'string' }
                    }
                }
            }
        },
        handler: function (request, reply) {
            reply.send({ hello: 'world' })
        }
    }
];

module.exports = routes;