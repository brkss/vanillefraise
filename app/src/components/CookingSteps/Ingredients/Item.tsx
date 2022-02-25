import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  txt: string;
}

export const Item: React.FC<Props> = ({txt}) => {
  const [checked, SetChecked] = React.useState(false);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => SetChecked(!checked)}
    >
      <View
        style={[
          styles.check,
          { backgroundColor: checked ? "#94CB8B" : "#343433" },
        ]}
      ></View>
      <Text
        style={[
          styles.txt,
          { textDecorationLine: checked ? "line-through" : "none" },
        ]}
        >
        {txt}
      </Text>
    </TouchableOpacity>
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
