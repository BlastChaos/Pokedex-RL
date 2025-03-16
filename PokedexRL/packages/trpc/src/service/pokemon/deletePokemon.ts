import { eq } from "drizzle-orm";
import { db } from "../../database/db";
import { pokemons } from "../../database/model/pokemons";

type Input = {
  id: number;
};
export async function deletePokemon(input: Input) {
  await db.delete(pokemons).where(eq(pokemons.id, input.id));

  return input.id;
}
