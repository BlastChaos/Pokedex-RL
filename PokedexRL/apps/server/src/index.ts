import fastify from "fastify";

const server = fastify();

server.get("/", async () => {
  return { message: "Hello, World!" };
});

server.listen(
  {
    port: 3000,
  },
  (err, address) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log(`Server is running at ${address}`);
  }
);
