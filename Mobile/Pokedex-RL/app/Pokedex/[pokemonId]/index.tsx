import { PokemonInfo } from "@/components/PokemonInfo/Pokemon";
import { useLocalSearchParams } from "expo-router";

export const PokedexPokemon: React.FC = () => {
  const { pokemonId } = useLocalSearchParams<{ pokemonId: string }>();
  return <PokemonInfo pokemonId={pokemonId} />;
};
