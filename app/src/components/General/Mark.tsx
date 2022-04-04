import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

interface Props {
  mark: () => void;
  marked: boolean;
}

export const MarkAsFinished: React.FC<Props> = ({ marked, mark }) => {
  return (
    <Pressable
      style={[
        styles.container,
        { backgroundColor: marked ? "#5EA353" : "black" },
      ]}
      onPress={() => {
        if (!marked) mark();
      }}
    >
      <Ionicons
        name={marked ? "checkmark-circle-outline" : "restaurant-outline"}
        color={"white"}
        size={16}
      />
      <Text style={styles.txt}>{marked ? "COOKED" : "MARK AS COOKED"}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 15,
    backgroundColor: "black",
    borderRadius: 15,
    marginBottom: 3,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: -5,
  },
  txt: {
    fontWeight: "bold",
    color: "white",
    fontSize: 13,
    marginLeft: 10,
  },
});
