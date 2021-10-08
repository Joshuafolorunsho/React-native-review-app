import React, { FunctionComponent } from "react";
import { View, StyleSheet, Text } from "react-native";

const ReviewDetails: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Text>ReviewDetails Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ReviewDetails;
