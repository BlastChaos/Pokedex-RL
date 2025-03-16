import { db } from "../../database/db";
import { pokemons } from "../../database/model/pokemons";
import { generatePokemonFromLLM } from "./helper/generatePokemonFromLLM";

type Props = {
  base64Image: string;
};
export const createPokemon = async (props: Props): Promise<string> => {
  const pokemonInfo = await generatePokemonFromLLM(props);
  //TODO: CALL S3, keep image key
  //TODO: CALL S3, keep voice key

  const pokemon: { id: string }[] = await db
    .insert(pokemons)
    .values({
      attack: pokemonInfo.attack,
      createdAt: new Date(),
      defense: pokemonInfo.defense,
      description: pokemonInfo.description,
      height: pokemonInfo.height,
      hp: pokemonInfo.hp,
      imageKey: "Null",
      name: pokemonInfo.name,
      specialAttack: pokemonInfo.specialAttack,
      specialDefense: pokemonInfo.specialDefense,
      species: pokemonInfo.species,
      speed: pokemonInfo.speed,
      type1: pokemonInfo.type1,
      type2: pokemonInfo.type2,
      updatedAt: new Date(),
      voiceKey: "NULL",
      weight: pokemonInfo.weight,
    })
    .returning({ id: pokemons.id });

  return pokemon[0]?.id || "";
};
