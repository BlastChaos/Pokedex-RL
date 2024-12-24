import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";

import { ThemedText } from "@/Component/ThemedText";
import { CameraView, useCameraPermissions } from "expo-camera";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useRef, useState } from "react";
import { createPokemon } from "@/api/Service/createPokemon";
import { useRouter } from "expo-router";

export default function Camera() {
  const ref = useRef<CameraView>(null);
  const router = useRouter();

  const [isCameraReady, setIsCameraReady] = useState(false);

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

  const onTakePhoto = async () => {
    if (!isCameraReady) {
      return;
    }
    const cameraCapturedPicture = await ref.current?.takePictureAsync();
    await ref.current?.pausePreview();
    console.log(cameraCapturedPicture);
    try {
      const pokemonId = await createPokemon({
        photo: cameraCapturedPicture?.uri || "",
      });

      router.push({
        pathname: "/pokemon/[pokemonId]",
        params: { pokemonId },
      });
    } finally {
      await ref.current?.resumePreview();
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <ImageBackground
          source={require("@/assets/images/camera-bg.jpg")}
          resizeMode="cover"
          className="flex flex-col flex-1 justify-center items-center gap-y-6"
        >
          <View>
            <CameraView
              className="flex justify-center items-center w-108 h-108"
              ref={ref}
              onCameraReady={() => setIsCameraReady(true)}
              style={{
                borderRadius: 1000,
              }}
            >
              <Image
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
          <TouchableOpacity onPress={onTakePhoto}>
            <Text className="text-white  text-5xl">{"Take a shoot!"}</Text>
          </TouchableOpacity>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
