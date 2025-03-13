import { database } from "@/api/database";
import { getPokemonInfoFromLLM } from "../LLM/getPokemonInfoFromLLM";
import { Pokemon } from "@/api/Model/Pokemon";
import { queryClient } from "@/PokedexRL/apps/mobile/app/_layout";
import { pokemonKeys } from "./getPokemon";
type Props = {
  base64Image: string;
  uri: string;
};
export const createPokemon = async (props: Props): Promise<string> => {
  const pokemonInfo = await getPokemonInfoFromLLM(props.base64Image);

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
        pokemon.imageUrl = props.uri;
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
