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
      {/*<Ionicons
        name={marked ? "checkmark-circle-outline" : "restaurant-outline"}
        color={"white"}
        size={16}
    />*/}
      <Text style={styles.txt}>{marked ? "COOKED" : "I ate this"}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 4,
    paddingHorizontal: 10,
    backgroundColor: "#434343",
    borderRadius: 10,
    marginBottom: 3,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: -5,
    justifyContent: "center",
  },
  txt: {
    //fontFamily: "AvNextBold",
    fontWeight: "bold",
    color: "white",
    fontSize: 13,
    paddingHorizontal: 10,
    paddingVertical: 5,
    //marginLeft: 10,
  },
});
