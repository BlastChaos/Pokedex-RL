import { Tabs } from "expo-router";
import React from "react";

import { useColorScheme } from "@/hooks/useColorScheme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import Svg, {
  Circle,
  Path,
  Defs,
  RadialGradient,
  LinearGradient,
  Stop,
  SvgProps,
} from "react-native-svg";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        header: () => null,
      }}
    >
      <Tabs.Screen
        name="explore"
        options={{
          title: "Camera",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="camera-alt" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="pokedex"
        options={{
          title: "Pokedex",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="catching-pokemon" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="camera"
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => (
            <IconSnap
              scaleX={0.6}
              scaleY={0.6}
              color={color}
              className="mb-1"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="leaderBoard"
        options={{
          title: "LeaderBoard",
          tabBarIcon: ({ color, size }) => (
            <Feather name="clipboard" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const IconSnap: React.FC<SvgProps> = (props) => (
  <Svg
    width="118"
    height="118"
    viewBox="0 0 118 118"
    fill="none"
    {...props}
    // xmlns="http://www.w3.org/2000/svg"
  >
    <Circle cx="59" cy="55" r="51" fill="white" />
    <Circle cx="59" cy="55" r="50.5" stroke="#B5C8CE" />
    <Circle cx="59" cy="56" r="50" fill="#CFE0E6" />
    <Circle cx="59" cy="56" r="40" fill="#1675D3" />
    <Circle cx="59" cy="56" r="40" fill="url(#paint0_radial)" />
    <Path
      d="M84 47.5C84 56.6127 75.7924 42.5 59.5 42.5C43.2076 42.5 35 56.6127 35 47.5C35 38.3873 43.2076 26 59.5 26C75.7924 26 84 38.3873 84 47.5Z"
      fill="url(#paint1_linear)"
    />
    <Circle cx="59.5" cy="75.5" r="7.5" fill="white" />
    <Defs>
      <RadialGradient
        id="paint0_radial"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(59 56) rotate(90) scale(40)"
      >
        <Stop offset="0.745" stopColor="#2CEAFF" />
        <Stop offset="1" stopColor="#2CEAFF" stopOpacity="0" />
      </RadialGradient>
      <LinearGradient
        id="paint1_linear"
        x1="59.5"
        y1="26"
        x2="59.5"
        y2="50.5647"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="white" />
        <Stop offset="1" stopColor="white" stopOpacity="0.5" />
      </LinearGradient>
    </Defs>
  </Svg>
);
