import fastifyPlugin from "fastify-plugin";
import fastifyMongo, { FastifyMongoNestedObject, FastifyMongoObject } from "@fastify/mongodb";
import { FastifyInstance, FastifyPluginOptions } from "fastify";

declare module "fastify" {
  interface FastifyInstance {
    mongo: FastifyMongoObject & FastifyMongoNestedObject;
  }
}
const MONGO_URI = process.env.MONGODB_URI as string;
async function dbConnector(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
): Promise<void> {
  fastify.register(fastifyMongo, {
    url: MONGO_URI,
  });
}

export default fastifyPlugin(dbConnector);