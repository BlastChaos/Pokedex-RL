import { GoogleGenerativeAI } from "@google/generative-ai";
import { Pokemon } from "../../../model/Pokemon";
import { config } from "../../../config";

type PokemonLLM = Pick<
  Pokemon,
  | "species"
  | "name"
  | "weight"
  | "height"
  | "hp"
  | "attack"
  | "defense"
  | "specialAttack"
  | "specialDefense"
  | "speed"
  | "description"
  | "type"
>;
const genAI = new GoogleGenerativeAI(config.llmApiKey);
type Input = {
  base64Image: string;
};

export const generatePokemonFromLLM = async (
  input: Input
): Promise<PokemonLLM> => {
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
        data: input.base64Image,
        mimeType: "image/jpg",
      },
    },
  ]);

  const pokemon = JSON.parse(result.response.text());
  console.log("pokemon", pokemon);
  return pokemon;
};
