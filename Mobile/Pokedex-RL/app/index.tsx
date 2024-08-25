import { Image } from "expo-image";
import { useRouter } from "expo-router";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import { useAuth0 } from "react-native-auth0";

export default function HomeScreen() {
  const { user, isLoading, authorizeWithEmail } = useAuth0();
  const router = useRouter();
  if (!isLoading && !user) {
    console.log("User not logged in");
  }

  const onScanPress = () => {
    console.log("Camera pressed");
    router.push("/camera");
  };

  const onLoginPress = () => {};

  return (
    <ImageBackground
      source={require("@/assets/images/login-bg.jpg")}
      resizeMode="cover"
      className="flex flex-col flex-1 items-center"
    >
      <Image
        className="w-64 h-64 flex mt-24"
        source={require("@/assets/images/login-image.png")}
      />
      <View className="flex flex-col space-y-7 mt-32">
        <TouchableOpacity onPress={onLoginPress}>
          <Image
            source={require("@/assets/images/button-login.png")}
            className="w-64 h-12 flex"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={onScanPress}>
          <Image
            source={require("@/assets/images/button-scan.png")}
            className="w-64 h-12 flex"
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
