import React, { useEffect, useState } from "react";
import AppLoading from "expo-app-loading";
import Home from "./screens/home";
import { useFonts } from "expo-font";

const customFonts = {
  "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
};

export default function App() {
  const [fontsLoaded] = useFonts(customFonts);
  return fontsLoaded ? <Home /> : <AppLoading />;
}
