import {
  View,
  TextInput,
  FlatList,
  ActivityIndicator,
  Image,
  Text,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { PokemonBox } from "@/Component/PokemonBox/PokemonBox";
import { useRouter } from "expo-router";
import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import { getPokemons, pokemonKeys } from "@/api/Service/Pokemon/getPokemon";
import ListEmpty from "@/assets/images/list-empty.svg";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useDebounce } from "@/hooks/useDebounce";

const MAX_POKEMON = 6;

export const Pokedex: React.FC = () => {
  const [search, setSearch] = useState<string>("");

  const value = useDebounce<string>(search);

  const {
    data: pokemons = [],
    fetchNextPage,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: pokemonKeys.getPokemons({
      search: value,
    }),
    placeholderData: keepPreviousData,
    queryFn: ({ pageParam = 0 }) =>
      getPokemons({ search: value, skip: pageParam, take: 6 }),

    getNextPageParam: (lastPage, pages) => {
      return lastPage.length === MAX_POKEMON
        ? pages.length * MAX_POKEMON
        : undefined;
    },
    initialPageParam: 0,
    select: (data) => data.pages.flatMap((page) => page),
  });

  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView
        className="flex-1 pt-24 flex flex-col items-center gap-y-4"
        edges={["top", "bottom"]}
      >
        <View className="bg-white w-108 h-14 rounded-lg flex flex-row items-center px-2 gap-x-1">
          <MaterialIcons name="search" size={27} />
          <TextInput
            onChangeText={setSearch}
            value={search}
            className="flex-1"
            placeholder="Search your Pokemon"
          />
        </View>

        <FlatList
          className="h-max"
          data={pokemons}
          ListEmptyComponent={
            isLoading ? (
              <ActivityIndicator size={"large"} />
            ) : (
              <View className="pt-16 items-center gap-y-4">
                <ListEmpty width={100} height={100} />
                <Text>No Pokemon Found</Text>
              </View>
            )
          }
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
          onEndReached={() => {
            if (hasNextPage) {
              fetchNextPage();
            }
          }}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            isFetchingNextPage ? <ActivityIndicator /> : null
          }
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
