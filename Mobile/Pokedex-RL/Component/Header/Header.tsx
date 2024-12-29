import HeaderRight from "@/assets/images/header-top-right.svg";
import React from "react";
import { View } from "react-native";

import Svg, {
  Path,
  Circle,
  Defs,
  LinearGradient,
  Stop,
  RadialGradient,
} from "react-native-svg";
export const Header: React.FC = () => {
  return (
    <View className="flex flex-row h-20 bg-black">
      <HeaderTopLeft />
      <View className=" flex-1 flex justify-center items-center">
        <HeaderRight className="flex flex-1 self-center" scaleX={15} />
      </View>
    </View>
  );
};

const HeaderTopLeft = () => (
  <Svg width="256" height="135" viewBox="0 0 256 135" fill="none">
    <Path d="M0 0H253V75H232.777L175.842 124H0V0Z" fill="url(#paint0_linear)" />
    <Path
      d="M171.985 114.737H0V128H175.484C177.579 128 179.608 127.269 181.221 125.934L209.584 102.468L232.834 83.867C234.43 82.5903 236.413 81.8947 238.457 81.8947H253V68H234.95C232.855 68 230.826 68.7306 229.212 70.066L203.467 91.3684L177.723 112.671C176.109 114.006 174.08 114.737 171.985 114.737Z"
      fill="#17262F"
    />
    <Circle cx="57" cy="54" r="42" fill="white" />
    <Circle
      cx="57"
      cy="54"
      r="41.5882"
      stroke="#B5C8CE"
      strokeWidth="0.823529"
    />
    <Circle cx="57" cy="54.8236" r="41.1765" fill="#CFE0E6" />
    <Circle cx="57" cy="54.8235" r="32.9412" fill="#1675D3" />
    <Circle cx="57" cy="54.8235" r="32.9412" fill="url(#paint1_radial)" />
    <Path
      d="M77.5882 47.8236C77.5882 55.3281 70.829 43.7059 57.4118 43.7059C43.9945 43.7059 37.2353 55.3281 37.2353 47.8236C37.2353 40.319 43.9945 30.1177 57.4118 30.1177C70.829 30.1177 77.5882 40.319 77.5882 47.8236Z"
      fill="url(#paint2_linear)"
    />
    <Circle cx="57.4118" cy="70.8824" r="6.17647" fill="white" />
    <Circle cx="130" cy="30" r="14" fill="#A6292A" />
    <Circle cx="130" cy="30" r="14" fill="url(#paint3_radial)" />
    <Path
      d="M138.75 27.025C138.75 30.2144 135.877 25.275 130.175 25.275C124.473 25.275 121.6 30.2144 121.6 27.025C121.6 23.8356 124.473 19.5 130.175 19.5C135.877 19.5 138.75 23.8356 138.75 27.025Z"
      fill="url(#paint4_linear)"
    />
    <Circle cx="130.175" cy="36.825" r="2.625" fill="white" />
    <Circle cx="165" cy="30" r="14" fill="#8E6500" />
    <Circle cx="165" cy="30" r="14" fill="url(#paint5_radial)" />
    <Path
      d="M173.75 27.025C173.75 30.2144 170.877 25.275 165.175 25.275C159.473 25.275 156.6 30.2144 156.6 27.025C156.6 23.8356 159.473 19.5 165.175 19.5C170.877 19.5 173.75 23.8356 173.75 27.025Z"
      fill="url(#paint6_linear)"
    />
    <Circle cx="165.175" cy="36.825" r="2.625" fill="white" />
    <Circle cx="200" cy="30" r="14" fill="#0F5F1B" />
    <Circle cx="200" cy="30" r="14" fill="url(#paint7_radial)" />
    <Path
      d="M208.75 27.025C208.75 30.2144 205.877 25.275 200.175 25.275C194.473 25.275 191.6 30.2144 191.6 27.025C191.6 23.8356 194.473 19.5 200.175 19.5C205.877 19.5 208.75 23.8356 208.75 27.025Z"
      fill="url(#paint8_linear)"
    />
    <Circle cx="200.175" cy="36.825" r="2.625" fill="white" />
    <Defs>
      <LinearGradient
        id="paint0_linear"
        x1="198.011"
        y1="0"
        x2="198.011"
        y2="81"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E43839" />
        <Stop offset="0.9999" stopColor="#CE2034" />
      </LinearGradient>
      <RadialGradient
        id="paint1_radial"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(57 54.8235) rotate(90) scale(32.9412)"
      >
        <Stop offset="0.745" stopColor="#2CEAFF" />
        <Stop offset="1" stopColor="#2CEAFF" stopOpacity="0" />
      </RadialGradient>
      <LinearGradient
        id="paint2_linear"
        x1="57.4118"
        y1="30.1177"
        x2="57.4118"
        y2="50.3474"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="white" />
        <Stop offset="1" stopColor="white" stopOpacity="0.5" />
      </LinearGradient>
      <RadialGradient
        id="paint3_radial"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(130 30) rotate(90) scale(14)"
      >
        <Stop offset="0.745" stopColor="#FF5254" />
        <Stop offset="1" stopColor="#FF5254" stopOpacity="0" />
      </RadialGradient>
      <LinearGradient
        id="paint4_linear"
        x1="130.175"
        y1="19.5"
        x2="130.175"
        y2="28.0976"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="white" />
        <Stop offset="1" stopColor="white" stopOpacity="0.5" />
      </LinearGradient>
      <RadialGradient
        id="paint5_radial"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(165 30) rotate(90) scale(14)"
      >
        <Stop offset="0.745" stopColor="#FFCA00" />
        <Stop offset="1" stopColor="#FFCA00" stopOpacity="0" />
      </RadialGradient>
      <LinearGradient
        id="paint6_linear"
        x1="165.175"
        y1="19.5"
        x2="165.175"
        y2="28.0976"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="white" />
        <Stop offset="1" stopColor="white" stopOpacity="0.5" />
      </LinearGradient>
      <RadialGradient
        id="paint7_radial"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(200 30) rotate(90) scale(14)"
      >
        <Stop offset="0.745" stopColor="#1EBE36" />
        <Stop offset="1" stopColor="#1EBE36" stopOpacity="0" />
      </RadialGradient>
      <LinearGradient
        id="paint8_linear"
        x1="200.175"
        y1="19.5"
        x2="200.175"
        y2="28.0976"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="white" />
        <Stop offset="1" stopColor="white" stopOpacity="0.5" />
      </LinearGradient>
    </Defs>
  </Svg>
);
