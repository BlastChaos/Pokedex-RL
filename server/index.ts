import Fastify from "fastify";
import { config } from "../config";

const fastify = Fastify({
  logger: true,
});

// Declare a route
fastify.get("/", function (_request, reply) {
  reply.send({ hello: "world" });
});

// Run the server!
fastify.listen({ port: config.serverPort }, function (err) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`server listening on ${config.serverPort}`);
  // Server is now listening on ${address}
});
