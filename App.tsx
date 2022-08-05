import React from "react";
import { StatusBar } from "react-native";
import * as SplashScreen from "expo-splash-screen";

import { Bellefair_400Regular, useFonts } from "@expo-google-fonts/bellefair";
import { BarlowCondensed_400Regular } from "@expo-google-fonts/barlow-condensed";

import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";

import { Home } from "./src/screens/Home";
import { AppRoutes } from "./src/routes/app.routes";

export default function App() {
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    Bellefair_400Regular,
    BarlowCondensed_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <AppRoutes />
    </ThemeProvider>
  );
}
