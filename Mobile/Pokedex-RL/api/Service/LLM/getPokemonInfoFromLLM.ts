import { Pokemon } from "@/api/Model/Pokemon";
import { config } from "@/config";

import { GoogleGenerativeAI } from "@google/generative-ai";

type PokemonLLM = Pick<
  Pokemon,
  | "species"
  | "name"
  | "weight"
  | "height"
  | "hp"
  | "attack"
  | "defense"
  | "speAttack"
  | "speDefense"
  | "speed"
  | "description"
  | "type"
>;

export const getPokemonInfoFromLLM = async (
  base64Image: string
): Promise<PokemonLLM> => {
  const genAI = new GoogleGenerativeAI(config.llmApiKey);
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
    generationConfig: {
      responseMimeType: "application/json",
    },
  });
  console.log("envoie en cours");
  const result = await model.generateContent([
    config.llmPrompt,
    {
      inlineData: {
        data: base64Image,
        mimeType: "image/png",
      },
    },
  ]);

  const pokemon = JSON.parse(result.response.text());
  console.log("pokemon", pokemon);
  return pokemon;
};
