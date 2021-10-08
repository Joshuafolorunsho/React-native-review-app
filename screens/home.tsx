import React, { FunctionComponent } from "react";
import { View, StyleSheet, Text } from "react-native";
import globalStyles from "../styles/global";

const Home: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={globalStyles.titleText}>Home Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
  },
});

export default Home;
