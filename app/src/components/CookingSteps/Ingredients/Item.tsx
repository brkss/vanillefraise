import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Item: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.check}></View>
      <Text style={styles.txt}>Some random ingredient !</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    flexDirection: "row",
  },
  check: {
    height: 24,
    width: 24,
    borderRadius: 7,
    marginRight: 10,
    backgroundColor: "#343433",
  },
  txt: {
    fontSize: 21,
    fontWeight: "bold",
  },
});
