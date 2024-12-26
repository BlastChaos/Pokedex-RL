import { View, TextInput, FlatList } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { PokemonBox } from "@/Component/PokemonBox/PokemonBox";
import { useRouter } from "expo-router";
import { Pokemon } from "@/api/Model/Pokemon";

export default function TabTwoScreen() {
  const [search, setSearch] = useState<string>();
  const pokemons: Pokemon[] = [
    {
      id: "1",
      type: [4, 8],
      name: "Bulbasaur",
      attack: 49,
      defense: 49,
      description: "",
      height: 7,
      hp: 45,
      speAttack: 65,
      species: "Seed Pokémon",
      speDefense: 65,
      speed: 45,
      weight: 69,
      voiceUrl: "",
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      id: "2",
      type: [10, 3],
      name: "Ivysaur",
      attack: 49,
      defense: 49,
      description: "",
      height: 7,
      hp: 45,
      speAttack: 65,
      species: "Seed Pokémon",
      speDefense: 65,
      speed: 45,
      weight: 69,
      voiceUrl: "",
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
