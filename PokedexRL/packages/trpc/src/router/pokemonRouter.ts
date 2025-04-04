import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import { createPokemon } from "../service/pokemon/createPokemon";
import { getPokemons } from "../service/pokemon/getPokemons";
import { deletePokemon } from "../service/pokemon/deletePokemon";

export const pokemonRouter = router({
  create: publicProcedure
    .input(
      z.object({
        base64Image: z.string(),
      })
    )
    .mutation(async (opt) => {
      const id = await createPokemon({
        base64Image: opt.input.base64Image,
      });
      return id;
    }),

  get: publicProcedure
    .input(
      z.object({
        cursor: z.string().nullish(),
        skip: z.number().nullish(),
        limit: z.number().nullish(),
        search: z.string().nullish(),
      })
    )
    .query(async (opts) => {
      const pokemons = await getPokemons(opts.input);
      return pokemons;
    }),
  getById: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(async (opts) => {
      const pokemons = await getPokemons({
        ids: [opts.input.id],
      });
      return pokemons[0];
    }),

  delete: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async (opts) => {
      await deletePokemon({
        id: opts.input.id,
      });
      return "deleted";
    }),
});
