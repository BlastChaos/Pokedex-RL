import { ExpoConfig, ConfigContext } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "Pokedex RL",
  slug: "PokedexRL",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./logo.ico",
  scheme: "myapp",
  androidStatusBar: {
    backgroundColor: "#D12435",
    translucent: false,
  },
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/images/splash.png",
    resizeMode: "contain",
    backgroundColor: "#E54D6A",
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.Jbs.PokedexRL",
  },
  android: {
    package: "com.Jbs.PokedexRL",
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/favicon.png",
  },
  plugins: [
    ["@morrowdigital/watermelondb-expo-plugin"],
    [
      "expo-build-properties",
      {
        android: {
          kotlinVersion: "1.6.10",
          packagingOptions: {
            pickFirst: ["**/libc++_shared.so"],
          },
        },
      },
    ],
    "expo-router",
    [
      "expo-dev-launcher",
      {
        launchMode: "most-recent",
      },
    ],
    [
      "expo-camera",
      {
        cameraPermission: "Allow $(PRODUCT_NAME) to access your camera",
        microphonePermission: "Allow $(PRODUCT_NAME) to access your microphone",
        recordAudioAndroid: false,
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
  },
});
