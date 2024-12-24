import HeaderLeft from "@/assets/images/header-top-left.svg";
import HeaderRight from "@/assets/images/header-top-right.svg";
import React from "react";
import { View } from "react-native";
export const Header: React.FC = () => {
  return (
    <View className=" flex-1 flex flex-row  h-20">
      <HeaderLeft />
      <HeaderRight className="flex flex-1" scaleX={15} />
    </View>
  );
};
