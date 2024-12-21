import { ExpoImage } from "@/Component/ExpoImage/ExpoImage";
import { useRouter } from "expo-router";
import { View, ImageBackground, TouchableOpacity } from "react-native";

export default function HomeScreen() {
  // const { user, isLoading, authorizeWithEmail } = useAuth0();
  const router = useRouter();
  // if (!isLoading && !user) {
  //   console.log("User not logged in");
  // }

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
      <ExpoImage
        className="w-64 h-64 flex mt-24"
        source={require("@/assets/images/login-image.png")}
      />
      <View className="flex flex-col gap-y-10 mt-32">
        <TouchableOpacity onPress={onLoginPress}>
          <ExpoImage
            source={require("@/assets/images/button-login.png")}
            className="w-96 h-16 flex"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={onScanPress}>
          <ExpoImage
            source={require("@/assets/images/button-scan.png")}
            className="w-96 h-16 flex"
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
