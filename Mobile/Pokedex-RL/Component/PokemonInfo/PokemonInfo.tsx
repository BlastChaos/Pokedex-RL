import { Pokemon } from "@/api/Model/Pokemon";
import { useObject } from "@realm/react";
import ParallaxScrollView from "../ParallaxScrollView";
import { Image, Text, View } from "react-native";
import React from "react";
import { BarChart, barDataItem } from "react-native-gifted-charts";
type Props = {
  pokemonId: string;
};

export const PokemonInfo: React.FC<Props> = (props: Props) => {
  const { pokemonId } = props;
  // const pokemon = useObject(Pokemon, pokemonId);
  // if (!pokemon) {
  //   return <div> pokemon not found!</div>;
  // }

  const pokemon: Pokemon = {
    _id: "1",
    attack: 49,
    defense: 49,
    height: 7,
    hp: 45,
    speAttack: 65,
    speDefense: 65,
    species: "Seed Pokémon",
    speed: 45,
    weight: 69,
    foundBy: "Professor Oak",
    description:
      "For some time after its birth, it grows by gaining nourishment from the seed on its back.",
    type: 1,
    name: "Bulbasaur",
    number: 1,
    voiceUrl: "",
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  };

  const maxValue = 200;

  const data: barDataItem[] = [
    {
      label: "HP",
      value: pokemon.hp,
      frontColor: `hsl(${(pokemon.hp / maxValue) * 120}, 100%, 50%)`,
      topLabelComponent: () => (
        <Text className="font-bold text-base">{pokemon.hp}</Text>
      ),
    },
    {
      label: "Attack",
      value: pokemon.attack,
      frontColor: `hsl(${(pokemon.attack / maxValue) * 120}, 100%, 50%)`,

      topLabelComponent: () => (
        <Text className="font-bold text-base">{pokemon.attack}</Text>
      ),
    },
    {
      label: "Defense",
      value: pokemon.defense,
      frontColor: `hsl(${(pokemon.defense / maxValue) * 120}, 100%, 50%)`,
      topLabelComponent: () => (
        <Text className="font-bold text-base">{pokemon.defense}</Text>
      ),
    },
    {
      label: "Spe. Atk",
      value: pokemon.speAttack,
      frontColor: `hsl(${(pokemon.speAttack / maxValue) * 120}, 100%, 50%)`,
      topLabelComponent: () => (
        <Text className="font-bold text-base">{pokemon.speAttack}</Text>
      ),
    },
    {
      label: "Spe. Def",
      value: pokemon.speDefense,
      frontColor: `hsl(${(pokemon.speDefense / maxValue) * 120}, 100%, 50%)`,
      topLabelComponent: () => (
        <Text className="font-bold text-base">{pokemon.speDefense}</Text>
      ),
    },
    {
      label: "Speed",
      value: pokemon.speed,
      frontColor: `hsl(${(pokemon.speed / maxValue) * 120}, 100%, 50%)`,
      topLabelComponent: () => (
        <Text className="font-bold  text-base">{pokemon.speed}</Text>
      ),
    },
  ];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Image
          className="w-full h-full"
          source={{
            uri: pokemon.imageUrl,
          }}
        />
      }
    >
      <View className="px-10">
        <View className={"pt-8"}>
          <View className="flex flex-row space-x-3 items-center ">
            <Text className="font-bold text-5xl">{pokemon.name}</Text>
            <Text className="text-gray-500 text-sm">{`The ${pokemon.species}`}</Text>
          </View>
        </View>

        <View className="bg-gray-400 rounded-md w-60 mt-3">
          <Text>{"Random voice"}</Text>
        </View>
        <View className="flex justify-center items-center pt-5">
          <Text>{pokemon.description}</Text>
        </View>
        <Text className="pt-6">{`Found by: ${pokemon.foundBy}`}</Text>

        <View className="flex justify-center items-center pl-20">
          <BarChart
            initialSpacing={0}
            endSpacing={0}
            horizontal
            barWidth={30}
            roundedTop
            disablePress
            width={370}
            height={400}
            roundedBottom
            maxValue={maxValue}
            hideAxesAndRules
            spacing={23}
            hideRules
            barMarginBottom={15}
            data={data}
            isAnimated
            yAxisThickness={0}
            xAxisThickness={0}
            // labelsExtraHeight={50} // Add padding between the label and the bars
            // labelTextStyle={{ paddingRight: 10 }} // Adjust padding as needed
          />
        </View>
        <View className="flex justify-center items-center">
          <Text>{"ok"}</Text>
        </View>
      </View>
    </ParallaxScrollView>
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
