import { publicProcedure, router } from "../trpc";
import { z } from "zod";

export const teamRouter = router({
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .query(() => {
      return {};
    }),
  get: publicProcedure.query(() => {
    return [];
  }),
  getById: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(() => {
      return {};
    }),

  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        pokemonIds: z.array(z.string()).max(6),
      })
    )
    .mutation(() => {
      return "updated";
    }),

  delete: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(() => {
      return "deleted";
    }),
});
