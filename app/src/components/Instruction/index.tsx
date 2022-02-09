import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Item } from "./Item";

export const Instructions: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Instructions</Text>
      <Item />
      <Item />
      <Item />
      <Item />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
  title: {
    fontSize: 25,
    marginBottom: 15,
    fontWeight: "bold",
  },
});
