import { useRouter } from "expo-router";
import { View, ImageBackground, TouchableOpacity, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  // const { user, isLoading, authorizeWithEmail } = useAuth0();
  const router = useRouter();
  // if (!isLoading && !user) {
  //   console.log("User not logged in");
  // }

  const onScanPress = () => {
    console.log("Camera pressed");
    router.push("/tabs");
  };

  const onLoginPress = () => {};

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <ImageBackground
          source={require("@/assets/images/login-bg.jpg")}
          resizeMode="cover"
          className="flex-1"
        >
          <View className="flex flex-col items-center mt-24">
            <Image
              className="w-64 h-64 flex mt-24"
              source={require("@/assets/images/login-image.png")}
            />
            <View className="flex flex-col gap-y-10 mt-32">
              <TouchableOpacity onPress={onLoginPress}>
                <Image
                  source={require("@/assets/images/button-login.png")}
                  className="w-96 h-16 flex"
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={onScanPress}>
                <Image
                  source={require("@/assets/images/button-scan.png")}
                  className="w-96 h-16 flex"
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
