import { database } from "@/api/database";
import { Pokemon } from "@/api/Model/Pokemon";
import { queryClient } from "@/app/_layout";
import { Q } from "@nozbe/watermelondb";
import {
  Clause,
  sanitizeLikeString,
} from "@nozbe/watermelondb/QueryDescription";

type Filter = {
  skip?: number;
  take?: number;
  search?: string;
};

export const pokemonKeys = {
  getPokemons: (filter: Filter) => ["pokemons", filter],
  getPokemon: (id: string) => ["pokemon", id],
};

export async function getPokemons(filter: Filter) {
  const query: Clause[] = [];
  if (filter.search) {
    query.push(
      Q.where("name", Q.like(`%${sanitizeLikeString(filter.search)}%`))
    );
  }

  if (filter.skip) {
    query.push(Q.skip(filter.skip));
  }

  if (filter.take) {
    query.push(Q.take(filter.take));
  }

  const pokemons = await database.collections
    .get<Pokemon>(Pokemon.table)
    .query(query)
    .fetch();

  for (const pokemon of pokemons) {
    queryClient.setQueriesData(
      {
        queryKey: pokemonKeys.getPokemon(pokemon.id),
      },
      pokemon
    );
  }

  return pokemons;
}

export async function getPokemon(id: string) {
  const pokemon = await database.collections
    .get<Pokemon>(Pokemon.table)
    .find(id);

  return pokemon;
}
