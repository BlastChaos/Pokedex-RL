import { View, Text, Image, TouchableOpacity } from "react-native";
import { IconType } from "../IconType/IconType";
import { TypeFlag } from "../TypeFlag/TypeFlag";

type Pokemon = {
  id: string;
  type: number;
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
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View className={"w-96 h-28 bg-white rounded-lg flex flex-row relative"}>
        <View className="flex flex-col pl-10  w-60 h-28 justify-center rounded-l-lg">
z
          <TypeFlag type={pokemon.type} />
        </View>
        <View className="absolute justify-center items-center w-full">
          <IconType type={pokemon.type} width={100} height={115} fill={"red"} />
        </View>
        <View className="flex-1 rounded-r-lg items-center justify-center">
          <Image
            className="w-28 h-24"
            source={{
              uri: pokemon.imageUrl,
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
