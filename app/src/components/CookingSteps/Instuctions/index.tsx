import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Item } from "./Item";

export const InstructionsStep: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.hint}>
        You got it chef ! just follow these instructions
      </Text>
      <View>
        <Item />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hint: {
    fontFamily: "helvitica-condesed",
    fontSize: 17,
  },
});
