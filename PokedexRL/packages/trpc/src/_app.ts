import { teamRouter } from "./router/teamRouter";
import { pokemonRouter } from "./router/pokemonRouter";
import { publicProcedure, router } from "./trpc";
export const appRouter = router({
  pokemon: pokemonRouter,
  team: teamRouter,
  health: publicProcedure.query(() => "it works"),
});

// Export only the type of a router!
// This prevents us from importing server code on the client.
export type AppRouter = typeof appRouter;
