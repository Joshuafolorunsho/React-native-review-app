import React, { FunctionComponent } from "react";
import { View, StyleSheet, Text } from "react-native";

const Home: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

export default Home;
