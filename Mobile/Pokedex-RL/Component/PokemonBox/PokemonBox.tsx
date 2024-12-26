import { View, Text, Image, TouchableOpacity } from "react-native";
import { IconType } from "../IconType/IconType";
import { TypeFlag } from "../TypeFlag/TypeFlag";
import { LinearGradient } from "expo-linear-gradient";
import { pokemonTypeColor } from "@/helper/pokemonTypeColor";
import { Pokemon, Type } from "@/api/Model/Pokemon";

type PokemonBox = Pick<Pokemon, "type" | "name" | "imageUrl">;

type Props = {
  pokemon: PokemonBox;
  onPress: () => void;
};

export const PokemonBox: React.FC<Props> = (props) => {
  const pokemon = props.pokemon;
  const firstType = pokemon.type[0];
  const color = pokemonTypeColor[firstType];

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
        <View className="absolute justify-center items-center w-full">
          <IconType type={firstType} width={100} height={110} />
        </View>
        <View className="flex flex-col pl-10  w-60 h-28 justify-center rounded-l-lg">
          {/* <Text className="text-gray-500">{`N${pokemon.number}`}</Text> */}
          <Text className="font-bold text-2xl">{pokemon.name}</Text>

          <View className="flex flex-row gap-x-2">
            {pokemon.type.map((type) => (
              <TypeFlag type={type} key={type} />
            ))}
          </View>
        </View>

        <View className="flex-1 rounded-r-lg items-center justify-center">
          <Image
            className="w-36 ml-5 h-28"
            source={{
              uri: pokemon.imageUrl,
            }}
          />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};
