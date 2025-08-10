import Fastify from "fastify";
import userRoutes from "./modules/user/user.route";
import dotenv from 'dotenv';
import dbConnector from './modules/db/config'


dotenv.config();
const server = Fastify();
server.register(dbConnector);

server.get("/healthcheck", () => {
  return { status: "OK" };
});

server.register(userRoutes, { prefix: "api/user" });

const main = async () => {
  try {
    server.listen({ port: 5000, host: "0.0.0.0" }, () => {
      console.log("Server is running on http://localhost:5000");
    });
  } catch (e) {
    console.log("Error starting the server:", e);
  }
};

main();
