import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Reminder: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Reminder</Text>
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
