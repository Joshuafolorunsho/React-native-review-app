import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ReviewDetails from "../screens/reviewDetails";
import Home from "../screens/home";
import React from "react";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Reviews" component={ReviewDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
