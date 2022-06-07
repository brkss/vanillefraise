import React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";

interface Props {
  pressed: () => void;
  txt: string;
  selected?: boolean;
}

export const FoodItem: React.FC<Props> = ({ txt, pressed, selected }) => {
  return (
    <Pressable
      style={[
        styles.container,
        { borderColor: selected ? "black" : "transparent" },
      ]}
      onPress={pressed}
    >
      <View style={styles.circle} />
      <Text style={styles.txt}>{txt}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    padding: 15,
    backgroundColor: "#DCD9D9",
    flexDirection: "row",
    borderRadius: 7,
    alignItems: "center",
    borderColor: "#434343",
    borderWidth: 2,
  },
  txt: {
    fontSize: 16,
    fontWeight: "bold",
  },
  circle: {
    height: 17,
    width: 17,
    borderRadius: 17,
    backgroundColor: "black",
    marginRight: 10,
  },
});
