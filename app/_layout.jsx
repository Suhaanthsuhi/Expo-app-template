import { fonts } from "@/code/global/fonts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Asset } from "expo-asset";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

const client = new QueryClient();

// List of icons to preload
const icons = [
  require("@/assets/icons/onboarding/analytics.png"),
  require("@/assets/icons/onboarding/scanner.png"),
  require("@/assets/icons/onboarding/wallet.png"),
];

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);
  const [fontsLoaded, fontError] = useFonts(fonts);

  useEffect(() => {
    async function preloadAssets() {
      try {
        // Preload icons
        const iconsAssets = icons.map((icon) =>
          Asset.fromModule(icon).downloadAsync()
        );

        // Wait for both fonts and icons to load
        await Promise.all([...iconsAssets]);
      } catch (error) {
        console.warn("Icons Assets loading error:", error);
      } finally {
        setIsReady(true);
        SplashScreen.hideAsync();
      }
    }

    if (fontsLoaded || fontError) {
      preloadAssets();
    }
  }, [fontsLoaded, fontError]);

  // Return null until everything is loaded
  if (!isReady || (!fontsLoaded && !fontError)) {
    return null;
  }

  return (
    <QueryClientProvider client={client}>
      <StatusBar style="dark" />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack screenOptions={{ headerShown: false }} />
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}
