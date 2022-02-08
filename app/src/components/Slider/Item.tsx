import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Item: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🥗</Text>
      <Text style={styles.title}>Salades</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D9EFB8",
    marginRight: 10,
    height: 88,
    width: 68,
    //padding: 15,
    maxHeight: 100,
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 33,
    textAlign: "center",
  },
  title: {
    fontSize: 11,
    fontWeight: "bold",
    marginTop: 4,
  },
});
