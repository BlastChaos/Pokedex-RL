import { Pokemon } from "@/api/Model/Pokemon";
import {
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { TypeFlag } from "../TypeFlag/TypeFlag";
import { InfoRow } from "../InfoRow/InfoRow";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import { RadarChart, RadarData } from "@salmonco/react-native-radar-chart";
import { useRouter } from "expo-router";
import { deletePokemon } from "@/api/Service/Pokemon/deletePokemons";
type Props = {
  pokemonId: string;
};

export const PokemonInfo: React.FC<Props> = (props: Props) => {
  const { pokemonId } = props;
  // const pokemon = useObject(Pokemon, pokemonId);
  // if (!pokemon) {
  //   return <div> pokemon not found!</div>;
  // }

  const route = useRouter();

  const pokemon: Pokemon = {
    id: "1",
    attack: 49,
    defense: 49,
    height: 7,
    hp: 45,
    speAttack: 65,
    speDefense: 65,
    species: "Seed Pokémon",
    speed: 45,
    weight: 69,
    // foundBy: "Professor Oak",
    description:
      "For some time after its birth, it grows by gaining nourishment from the seed on its back.",
    type: 1,
    name: "Bulbasaur",
    // number: 1,
    voiceUrl: "",
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  };

  const maxValue = 200;

  const data: RadarData[] = [
    {
      label: "HP",
      value: pokemon.hp,
    },
    {
      label: "Attack",
      value: pokemon.attack,
    },
    {
      label: "Defense",
      value: pokemon.defense,
    },
    {
      label: "Spe. Atk",
      value: pokemon.speAttack,
    },
    {
      label: "Spe. Def",
      value: pokemon.speDefense,
    },
    {
      label: "Speed",
      value: pokemon.speed,
    },
  ];

  const onDelete = () => {
    Alert.alert(
      `Delete ${pokemon.name}`,
      `You are about to delete ${pokemon.name}. Are you sure?`,
      [
        {
          isPreferred: true,
          text: "No",
        },

        {
          text: "Yes",
          onPress: () => {
            deletePokemon(pokemon.id);
            route.push("/pokedex");
          },
        },
      ],
      {
        cancelable: true,
      }
    );
  };

  return (
    <ScrollView>
      <View className="flex flex-col">
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
          }}
          className="h-80 w-screen"
        />
        <View className="px-9">
          <View className={"pt-8"}>
            <View className="flex flex-col gap-y-2 justify-center">
              <Text className="font-bold text-5xl">{pokemon.name}</Text>
              <TypeFlag type={pokemon.type} />
              <View className="bg-gray-400 rounded-md w-60 mt-3">
                <Text>{"Random voice"}</Text>
              </View>
            </View>
          </View>

          <View className="flex justify-center pt-5">
            <Text>{pokemon.description}</Text>
          </View>

          <View className="flex flex-col pl-2 pt-5 gap-y-3">
            <InfoRow
              icon={<FontAwesome5 name="cat" size={24} color="black" />}
              label="Species"
              value={pokemon.species}
            />

            <InfoRow
              icon={
                <FontAwesome5 name="weight-hanging" size={24} color="black" />
              }
              label="Weight"
              value={`${pokemon.weight} Kg`}
            />

            <InfoRow
              icon={<Entypo name="ruler" size={24} color="black" />}
              label="Height"
              value={`${pokemon.height} cm`}
            />

            <InfoRow
              icon={<MaterialIcons name="speed" size={24} color="black" />}
              label="Speed"
              value={pokemon.speed.toString()}
            />

            <InfoRow
              icon={<Entypo name="heart-outlined" size={24} color="black" />}
              label="HP"
              value={pokemon.hp.toString()}
            />

            <InfoRow
              icon={
                <MaterialCommunityIcons name="sword" size={24} color="black" />
              }
              label="Attack"
              value={pokemon.attack.toString()}
            />

            <InfoRow
              icon={<Feather name="shield" size={24} color="black" />}
              label="Defense"
              value={pokemon.defense.toString()}
            />

            <InfoRow
              icon={
                <SimpleLineIcons name="magic-wand" size={24} color="black" />
              }
              label="Special Attack"
              value={pokemon.speAttack.toString()}
            />

            <InfoRow
              icon={
                <MaterialCommunityIcons
                  name="shield-sun-outline"
                  size={24}
                  color="black"
                />
              }
              label="Special Defense"
              value={pokemon.speDefense.toString()}
            />
          </View>

          <View className="mt-5 border border-black rounded-3xl bg-slate-50">
            <RadarChart
              data={data}
              maxValue={maxValue}
              gradientColor={{
                startColor: "#CC0000",
                endColor: "#00CB62",
                count: 5,
              }}
              stroke={[]}
              strokeWidth={[0.5, 0.5, 0.5, 0.5, 1]}
              strokeOpacity={[1, 1, 1, 1, 0.13]}
              labelColor="#433D3A"
              dataFillColor="#ebd638"
              dataFillOpacity={0.8}
              dataStroke="#ebd638"
              dataStrokeWidth={2}
              isCircle
            />
          </View>

          <TouchableOpacity
            className="flex mt-5 items-center"
            onPress={onDelete}
          >
            <Image
              source={require("@/assets/images/button-delete.png")}
              className="w-96 h-20"
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );

  // return (
  //   <>
  //     {/* <h1 className="font-medium text-4xl">Pokedex</h1>
  //     {store.capture.image}

  //     <input type="file" onChange={store.handleCaptureImage} />
  //     <button onClick={store.fetchVoice} className="p-2 bg-gray-200 rounded">
  //       Submit
  //     </button>

  //     {store.capture.image ? (
  //       <img src={store.capture.image} className="rounded-lg max-h-[200px]" />
  //     ) : (
  //       <div className="h-24 w-48 bg-gray-200 rounded-lg max-h-[200px]"></div>
  //     )}
  //     {store.capture.voiceUrl && (
  //       <audio src={store.capture.voiceUrl} controls autoPlay playsInline />
  //     )}
  //     <div>Voice Token: {store.capture.voiceJobToken}</div>
  //     <div>Voice Status: {store.capture.voiceStatus}</div>
  //     <div>Voice URL: {store.capture.voiceUrl}</div> */}
  //     <div>Name: {pokemon.name}</div>
  //     <div>Species: {pokemon.species}</div>
  //     <div>Weight: {pokemon.weight}</div>
  //     <div>Height: {pokemon.height}</div>
  //     <div>HP: {pokemon.hp}</div>
  //     <div>Attack: {pokemon.attack}</div>
  //     <div>Defense: {pokemon.defense}</div>
  //     <div>Special Attack: {pokemon.speAttack}</div>
  //     <div>Special Defense: {pokemon.speDefense}</div>
  //     <div>Speed: {pokemon.speed}</div>
  //     <div>Type: {pokemon.type}</div>
  //     <div>Description: {pokemon.description}</div>
  //   </>
  // );
};
