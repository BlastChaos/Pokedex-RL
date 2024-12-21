import { View, TextInput, FlatList } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { PokemonBox } from "@/Component/PokemonBox/PokemonBox";
import { useRouter } from "expo-router";

export default function TabTwoScreen() {
  const [search, setSearch] = useState<string>();
  const pokemons = [
    {
      id: "1",
      type: 1,
      name: "Bulbasaur",
      number: 1,
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      id: "2",
      type: 2,
      name: "Ivysaur",
      number: 2,
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    },
  ];

  const router = useRouter();

  return (
    <View className="pt-24 flex flex-col items-center gap-y-4">
      <View className="bg-white w-108 h-14 rounded-lg flex flex-row items-center px-2 gap-x-1">
        <MaterialIcons name="search" size={27} />
        <TextInput
          onChangeText={setSearch}
          value={search}
          placeholder="Search your Pokemon"
        />
      </View>

      <FlatList
        data={pokemons}
        renderItem={({ item }) => (
          <View className="pb-6">
            <PokemonBox
              pokemon={item}
              onPress={() =>
                router.push({
                  pathname: "/pokemon/[pokemonId]",
                  params: { pokemonId: item.id },
                })
              }
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
