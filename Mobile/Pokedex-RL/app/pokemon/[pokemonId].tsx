import { PokemonInfo } from "@/Component/PokemonInfo/PokemonInfo";
import { useLocalSearchParams } from "expo-router";

const Page: React.FC = () => {
  const { pokemonId } = useLocalSearchParams<{ pokemonId: string }>();
  return <PokemonInfo pokemonId={pokemonId} />;
};

export default Page;
