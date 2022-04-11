import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

interface Props {
  txt: string;
}

export const Item: React.FC<Props> = ({ txt }) => {
  const [checked, SetChecked] = React.useState(false);
  return (
    <Pressable
      style={styles.container}
      onPress={() => SetChecked(!checked)}
    >
      <View
        style={[
          styles.check,
          { backgroundColor: checked ? "#7fba75" : "#343433" },
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
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopColor: "#434343",
    borderTopWidth: 1,
    marginBottom: 15,
    paddingTop: 15,
    flexDirection: "row",
  },
  check: {
    height: 20,
    width: 20,
    borderRadius: 7,
    marginRight: 10,
    backgroundColor: "#343433",
  },
  txt: {
    flexShrink: 1,
    fontSize: 17,
    fontWeight: "bold",
  },
});
