import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Item } from "./Item";

interface Props {
  instructions: any[];
}

export const Instructions: React.FC<Props> = ({ instructions }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Instructions</Text>
      {instructions.map((instruction, key) => (
        <Item index={instruction.index} txt={instruction.raw} key={key} />
      ))}
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
