import React, { FunctionComponent } from "react";
import { View, StyleSheet, Text } from "react-native";

const Home: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 60,
  },

  text: {
    fontFamily: "Roboto-Bold",
    fontSize: 18,
  },
});

export default Home;
