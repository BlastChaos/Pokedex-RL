import { SQLWrapper } from "drizzle-orm/sql/sql";
import { db } from "../../database/db";
import { pokemons } from "../../database/model/pokemons";
import { gt } from "drizzle-orm";

type Input = {
  ids?: string[] | null;
  cursor?: string | null;
  limit?: number | null;
  search?: string | null;
};

export async function getPokemons(input?: Input) {
  const result = await db.query.pokemon.findMany({
    where: (pokemon, { inArray, and, ilike }) => {
      const conditions: SQLWrapper[] = [];
      if (input?.ids) {
        conditions.push(inArray(pokemon.id, input.ids));
      }
      if (input?.search) {
        conditions.push(ilike(pokemon.name, `%${input.search}%`));
      }

      if (input?.cursor) {
        conditions.push(gt(pokemon.id, input.cursor)); // Ensure gt is properly wrapped
      }

      return and(...conditions);
    },
    limit: input?.limit || undefined,
    orderBy: pokemons.id,
  });

  return result;
}
