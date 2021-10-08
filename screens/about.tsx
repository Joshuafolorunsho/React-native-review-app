import React, { FunctionComponent } from "react";
import { View, StyleSheet, Text } from "react-native";

const About: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Text>About Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

export default About;
