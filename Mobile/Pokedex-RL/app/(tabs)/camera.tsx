import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform } from "react-native";

import { Collapsible } from "@/Component/Collapsible";
import { ExternalLink } from "@/Component/ExternalLink";
import ParallaxScrollView from "@/Component/ParallaxScrollView";
import { ThemedText } from "@/Component/ThemedText";
import { ThemedView } from "@/Component/ThemedView";
import { CameraView, useCameraPermissions } from "expo-camera";

export default function Camera() {
  const [status] = useCameraPermissions({
    get: true,
    request: true,
  });

  if (!status?.granted) {
    return (
      <ThemedView>
        <ThemedText>
          Camera permission is required to use this feature.
        </ThemedText>
      </ThemedView>
    );
  }

  return (
    <View>
      <CameraView ></CameraView>
    </View>
  );
}