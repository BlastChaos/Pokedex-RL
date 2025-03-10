import { database } from "@/api/database";
import { Pokemon } from "@/api/Model/Pokemon";
import { queryClient } from "@/app/_layout";
import { pokemonKeys } from "./getPokemon";

export async function deletePokemon(pokemonId: string) {
  const result = await database.write(async () => {
    const pokemon = await database.collections
      .get<Pokemon>(Pokemon.table)
      .find(pokemonId);
    await pokemon.markAsDeleted();
  });

  queryClient.invalidateQueries({
    queryKey: pokemonKeys.pokemon,
  });
  return pokemonId;
}
