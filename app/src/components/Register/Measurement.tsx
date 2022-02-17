import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { InvisibleInput } from "../General/InvisibleInput";

export const Measurement: React.FC = () => {
  return (
    <View style={styles.container}>
      <InvisibleInput label={"WEIGHT"} txtChange={(t) => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
