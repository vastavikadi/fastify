import Fastify from "fastify";
import firstRoute from './our-first-route.js'
import dbConnector from "./our-db-connector.js";
const fastify = Fastify({ logger: true });

// //define the port
const port = 5000;

// //now we will create a route
// fastify.get("/", function (request, reply) {
//   reply.send("Hello World");
// });

// // Run the server!
// fastify.listen({ port }, function (err, address) {//by default takes in the host in the object where the port is passed: localhost 127.0.0.1 to change it pass host:(as whatever you want) like: host: '0.0.0.0'
//   if (err) {
//     fastify.log.error(err)
//     process.exit(1)
//   }
//   return `Server is now listening on ${address}`;
// })

//another thing is that fastify supports async and await, hence we can configure this index.js in a new way

//creating a route with async
// fastify.get("/", async (request, reply) => {
//   return { reply: "hello world" };
// });we are importing it from an external file


//NOTE: As with JavaScript, where everything is an object, with Fastify everything is a plugin.
fastify.register(firstRoute)//we used the register API, which is the core of the Fastify framework. It is the only way to add routes, plugins, et cetera.
fastify.register(dbConnector);

const appStart = async () => {
  try {
    await fastify.listen({ port });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

appStart()//started the app now
