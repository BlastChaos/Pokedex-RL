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
import { useRouter } from "expo-router";
import { useMutation } from "@tanstack/react-query";
import { TextWave } from "@/Component/TextWave/TextWave";
import { trpc } from "@/app/_layout";

export const Camera: React.FC = () => {
  const ref = useRef<CameraView>(null);
  const router = useRouter();

  const { mutate: createNewPokemon, isPending } = useMutation(
    trpc.pokemon.create.mutationOptions({
      onSuccess: (pokemonId) => {
        ref.current?.resumePreview();
        router.push({
          pathname: "/pokemon/[pokemonId]",
          params: { pokemonId },
        });
      },
      onError: () => {
        ref.current?.resumePreview();
      },
    })
  );

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

    const cameraCapturedPicture = await ref.current?.takePictureAsync({
      base64: true,
      quality: 0.5,
    });
    createNewPokemon({
      base64Image: cameraCapturedPicture?.base64 ?? "",
    });
    await ref.current?.pausePreview();
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
          {!isPending && (
            <TouchableOpacity onPress={onTakePhoto}>
              <Text className="text-white  text-5xl">{"Take a shoot!"}</Text>
            </TouchableOpacity>
          )}
          {isPending && (
            <TextWave
              text={"Getting pokemon info"}
              className="text-white text-5xl"
            />
          )}
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
