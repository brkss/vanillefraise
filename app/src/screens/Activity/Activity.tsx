import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Activity: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Activity</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
