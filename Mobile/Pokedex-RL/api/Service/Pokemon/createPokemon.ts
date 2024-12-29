import { database } from "@/api/database";
import { getPokemonInfoFromLLM } from "../LLM/getPokemonInfoFromLLM";
import { Pokemon } from "@/api/Model/Pokemon";
import { queryClient } from "@/app/_layout";
import { pokemonKeys } from "./getPokemon";

export const createPokemon = async (base64Image: string): Promise<string> => {
  const pokemonInfo = await getPokemonInfoFromLLM(base64Image);

  const newPokemon = await database.write(async () => {
    return await database.collections
      .get<Pokemon>(Pokemon.table)
      .create((pokemon) => {
        pokemon.species = pokemonInfo.species;
        pokemon.name = pokemonInfo.name;
        pokemon.weight = pokemonInfo.weight;
        pokemon.height = pokemonInfo.height;
        pokemon.hp = pokemonInfo.hp;
        pokemon.attack = pokemonInfo.attack;
        pokemon.defense = pokemonInfo.defense;
        pokemon.specialAttack = pokemonInfo.specialAttack;
        pokemon.specialDefense = pokemonInfo.specialDefense;
        pokemon.speed = pokemonInfo.speed;
        pokemon.description = pokemonInfo.description;
        pokemon.type = pokemonInfo.type;
        pokemon.imageUrl = base64Image;
        pokemon.voiceUrl = "";
      });
  });
  await queryClient.invalidateQueries({
    queryKey: pokemonKeys.pokemon,
  });

  queryClient.setQueriesData(
    {
      queryKey: pokemonKeys.getPokemon(newPokemon.id),
    },
    newPokemon
  );

  return newPokemon.id;
};
