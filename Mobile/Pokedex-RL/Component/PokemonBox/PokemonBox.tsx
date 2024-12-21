import { View, Text, Image, TouchableOpacity } from "react-native";
import { IconType } from "../IconType/IconType";
import { TypeFlag } from "../TypeFlag/TypeFlag";
import { LinearGradient } from "expo-linear-gradient";
import { pokemonTypeColor } from "@/helper/pokemonTypeColor";
import { Type } from "@/api/Model/Pokemon";

type Pokemon = {
  id: string;
  type: Type;
  name: string;
  number: number;
  imageUrl: string;
};
type Props = {
  pokemon: Pokemon;
  onPress: () => void;
};

export const PokemonBox: React.FC<Props> = (props) => {
  const pokemon = props.pokemon;
  const color = pokemonTypeColor[pokemon.type];

  return (
    <TouchableOpacity onPress={props.onPress}>
      <LinearGradient
        // Background Linear Gradient
        colors={[color, "#FFFFFF"]}
        end={{ x: 0, y: 0 }}
        start={{ x: 1, y: 0 }}
        style={{ borderRadius: 15 }}
        className="w-108 h-32 flex flex-row relative"
      >
        <View className="flex flex-col pl-10  w-60 h-28 justify-center rounded-l-lg">
          <Text className="text-gray-500">{`N${pokemon.number}`}</Text>
          <Text className="font-bold text-2xl">{pokemon.name}</Text>
          <TypeFlag type={pokemon.type} />
        </View>
        <View className="absolute justify-center items-center w-full">
          <IconType type={pokemon.type} width={100} height={110} />
        </View>
        <View className="flex-1 rounded-r-lg items-center justify-center">
          <Image
            className="w-28 h-24"
            source={{
              uri: pokemon.imageUrl,
            }}
          />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};
