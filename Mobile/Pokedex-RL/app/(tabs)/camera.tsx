import { View, ImageBackground } from "react-native";

import { ThemedText } from "@/Component/ThemedText";
import { CameraView, useCameraPermissions } from "expo-camera";
import { SafeAreaView } from "react-native-safe-area-context";
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
    <ImageBackground
      source={require("@/assets/images/camera-bg.jpg")}
      resizeMode="cover"
      className="flex flex-col flex-1 items-center"
    >
      <SafeAreaView>
        <View className="flex items-center justify-center">
          <CameraView>
            <ExpoImage
              source={require("@/assets/images/circle-padding-shadow-no-bg.png")}
              className="w-108 h-108 mt-32"
            />
          </CameraView>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
