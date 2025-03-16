import { SQLWrapper } from "drizzle-orm";
import { db } from "../../database/db";

type Input = {
  ids?: number[] | null;
  skip?: number | null;
  take?: number | null;
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

      return and(...conditions);
    },
    limit: input?.take || undefined,
    offset: input?.skip || undefined,
  });

  return result;
}
