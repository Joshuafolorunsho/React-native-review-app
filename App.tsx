import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import AppNavigator from "./routes/AppNavigator";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

const customFonts = {
  "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
};

export default function App() {
  const [fontsLoaded] = useFonts(customFonts);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <AppNavigator />;
}
