import { View, ImageBackground, Text } from "react-native";

import { ThemedText } from "@/Component/ThemedText";
import { CameraView, useCameraPermissions } from "expo-camera";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ExpoImage } from "@/Component/ExpoImage/ExpoImage";

export default function Camera() {
  const [status] = useCameraPermissions({
    get: true,
    request: true,
  });

  if (!status?.granted) {
    return (
      <SafeAreaView>
        <ThemedText>
          Camera permission is required to use this feature.
        </ThemedText>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <ImageBackground
          source={require("@/assets/images/camera-bg.jpg")}
          resizeMode="cover"
          className="flex flex-col flex-1 justify-center items-center pb-14 gap-y-6"
        >
          <View>
            <CameraView
              className="flex justify-center items-center w-108 h-108"
              style={{
                borderRadius: 1000,
              }}
            >
              <ExpoImage
                source={require("@/assets/images/circle-padding-shadow-no-bg.png")}
                className="w-108 h-108"
              />
            </CameraView>
          </View>

          <View className="gap-2">
            <Text className="text-white text-4xl italic text-center">
              {"Camera"}
            </Text>
            <Text className="text-gray-500 text-2xl italic text-center">
              {"Capture a photo of anything"}
            </Text>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
