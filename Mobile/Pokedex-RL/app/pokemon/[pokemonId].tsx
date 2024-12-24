import { PokemonInfo } from "@/Component/PokemonInfo/PokemonInfo";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Page: React.FC = () => {
  const { pokemonId } = useLocalSearchParams<{ pokemonId: string }>();
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <PokemonInfo pokemonId={pokemonId} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
  return;
};

export default Page;
