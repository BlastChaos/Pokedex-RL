import HeaderLeft from "@/assets/images/header-top-left.svg";
import HeaderRight from "@/assets/images/header-top-right.svg";
import React from "react";
import { View } from "react-native";
export const Header: React.FC = () => {
  return (
    <View className="flex flex-row h-20 bg-black">
      <HeaderLeft />
      <View className=" flex-1 flex justify-center items-center">
        <HeaderRight className="flex flex-1 self-center" scaleX={15}  />
      </View> 
    </View>
  );
};
