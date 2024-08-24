import { ExpoConfig, ConfigContext } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "Pokedex RL",
  slug: "PokedexRL",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/logo.png",
  scheme: "myapp",
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
    "expo-router",
    [
      "react-native-auth0",
      {
        domain: "dev-iptk7qf1vteodncy.us.auth0.com",
      },
    ],
    [
      "expo-dev-launcher",
      {
        launchMode: "most-recent",
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
  },
});
