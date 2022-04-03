import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

interface Props {
  marked: () => void;
}

export const MarkAsFinished: React.FC<Props> = ({marked}) => {
  return (
    <Pressable style={styles.container} onPress={() => marked()}>
      <Ionicons name={"checkmark-circle-outline"} color={"white"} size={16} />
      <Text style={styles.txt}>Mark As Cooked</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 17,
    backgroundColor: "black",
    borderRadius: 15,
    marginBottom: 3,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  txt: {
    fontWeight: "bold",
    color: "white",
    marginLeft: 10,
  },
});
