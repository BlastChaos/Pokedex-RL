import {
  fastifyTRPCPlugin,
  FastifyTRPCPluginOptions,
} from "@trpc/server/adapters/fastify";
import fastify from "fastify";
import { AppRouter, appRouter, createContext } from "@pokedex-rl/trpc";
const server = fastify({
  maxParamLength: 5000,
});
server.register(fastifyTRPCPlugin, {
  prefix: "/trpc",
  trpcOptions: {
    router: appRouter,
    createContext,
    onError({ path, error }) {
      // report to error monitoring
      console.error(`Error in tRPC handler on path '${path}':`, error);
    },
  } satisfies FastifyTRPCPluginOptions<AppRouter>["trpcOptions"],
});
(async () => {
  try {
    await server.listen({ port: 3000 });
    console.log("Server open on", 3000);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
})();
