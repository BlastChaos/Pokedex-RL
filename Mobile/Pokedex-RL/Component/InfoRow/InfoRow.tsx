import { Text, View } from "react-native";
import React from "react";
type Props = {
  icon: React.ReactElement;
  label: string;
  value: string;
};

export const InfoRow: React.FC<Props> = (props) => {
  return (
    <View className="flex flex-row items-center gap-x-9 border-b-2 border-gray-300 pb-3">
      <View className="flex flex-row items-center gap-x-2 w-24">
        <View className="w-7">{props.icon}</View>
        <Text className="font-bold">{props.label}</Text>
      </View>
      <Text>{props.value} </Text>
    </View>
  );
};
