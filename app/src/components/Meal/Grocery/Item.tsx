import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const GroceryItem: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>
        fresh herbs (mint, parsley, or cilantro) for serving{" "}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 13,
    backgroundColor: "#E1DFDF",
    marginBottom: 15,
    borderRadius: 8,
  },
  txt: {
    fontSize: 19,
    color: "#434343",
    fontWeight: "600",
  },
});
