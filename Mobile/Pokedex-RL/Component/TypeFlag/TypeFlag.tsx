import { Type } from "@/api/Model/Pokemon";
import { pokemonTypeColor } from "@/helper/pokemonTypeColor";
import React from "react";
import { View, Text } from "react-native";
type Props = {
  type: Type;
};
export const TypeFlag: React.FC<Props> = (props) => {
  return (
    <View
      style={{
        backgroundColor: pokemonTypeColor[props.type],
      }}
      className="rounded-lg w-24 pl-2 flex flex-row items-center"
    >
      <Text>{Type[props.type]}</Text>
      
    </View>
  );
};
