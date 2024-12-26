import { getPokemonInfoFromLLM } from "../LLM/getPokemonInfoFromLLM";

export const createPokemon = async (base64Image: string): Promise<string> => {
  const pokemonInfo = await getPokemonInfoFromLLM(base64Image);
  return Promise.resolve("Pokemon created");
};
