import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

import { AppProvider, UserProvider, RealmProvider } from "@realm/react";
// import { SyncConfiguration } from "realm";
import { Header } from "@/Component/Header/Header";
import HomeScreen from ".";
import { models } from "@/api/Model/models";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  console.log(process.env.EXPO_PUBLIC_REALM_ID);

  return (
    <ThemeProvider value={DefaultTheme}>
      <RealmProvider schema={models}>
        <Stack
          screenOptions={{
            header: () => <Header />,
          }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
          <Stack.Screen name="pokemon/[pokemonId]" />
        </Stack>
      </RealmProvider>
    </ThemeProvider>
  );
}
