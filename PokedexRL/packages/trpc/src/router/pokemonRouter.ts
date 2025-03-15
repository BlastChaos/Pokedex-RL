import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import { createPokemonFromLLM } from "../service/pokemon/createPokemonFromLLM";

export const pokemonRouter = router({
  create: publicProcedure
    .input(
      z.object({
        base64Image: z.string(),
      })
    )
    .mutation(async (opt) => {
      const id = await createPokemonFromLLM({
        base64Image: opt.input.base64Image,
      });
      return id;
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
