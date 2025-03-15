import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const pokemonRouter = router({
  create: publicProcedure
    .input(
      z.object({
        imageBase64: z.string(),
      })
    )
    .mutation(() => {
      return "nice";
    }),

  get: publicProcedure
    .input(
      z.object({
        limit: z.number().nullish(),
        offset: z.number().nullish(),
      })
    )
    .query(() => {
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
