import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Item: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}> 😄 </Text>
      <Text style={styles.title}>GOOD</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DCDCDC",
    borderRadius: 13,
    height: 100,
    width: 90,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  icon: {
    fontSize: 36,
    marginBottom: 5,
  },
});
