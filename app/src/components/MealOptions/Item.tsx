import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

interface Props {
  selected: boolean;
  txt: string;
  pressed: () => void;
}

export const Option: React.FC<Props> = ({ pressed, txt, selected }) => {
  return (
    <Pressable
      style={[
        styles.container,
        { backgroundColor: selected ? "black" : "transparent" },
      ]}
      onPress={() => pressed()}
    >
      <Text style={[styles.txt, {color: selected ? 'white' : 'black'}]}>{txt}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
  },
  txt: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
