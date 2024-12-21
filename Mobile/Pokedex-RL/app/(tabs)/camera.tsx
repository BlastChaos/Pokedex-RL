import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform, View } from "react-native";


import { ThemedText } from "@/Component/ThemedText";
import { CameraView, useCameraPermissions } from "expo-camera";
import { SafeAreaView } from "react-native-safe-area-context";

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
    <SafeAreaView>
      <View>
        <CameraView></CameraView>
      </View>
    </SafeAreaView>
  );
}
