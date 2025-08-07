// ESM
import fastifyPlugin from 'fastify-plugin'
import fastifyMongo from '@fastify/mongodb'

/**
 * @param {FastifyInstance} fastify
 * @param {Object} options
 */
async function dbConnector (fastify, options) {
  fastify.register(fastifyMongo, {
    url: 'mongodb://localhost:27017/test_database'
  })
}

// Wrapping a plugin function with fastify-plugin exposes the decorators
// and hooks, declared inside the plugin to the parent scope.
export default fastifyPlugin(dbConnector)//export things inside the plugin wrapper to use in the main server/index.js file


// NOTE: In Fastify, a plugin is just a function that adds functionality to your application — such as routes, decorators, hooks, or even registering other plugins.
// Plugins help in organizing your code cleanly and modularizing features, which is especially useful for large applications.

// Decorators are a way to add new properties or methods to the Fastify instance (fastify), or to the request/response objects.

// Example: fastify.decorate('someUtility', () => { /* ... */ })
// fastify.get('/test', async (request, reply) => {
//   fastify.someUtility()
// })
// Now someUtility becomes part of the fastify instance. This allows you to share logic (like database connectors, utilities, etc.) throughout your app cleanly.

//HOOKs
// fastify.addHook('onRequest', async (request, reply) => {
//   console.log('Incoming request!')
// })
