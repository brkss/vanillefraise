import React from "react";
import { View, StyleSheet } from "react-native";
import { Item } from "./Item";

export const ExerciseFeedBack: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Item />
      </View>
      <View style={styles.item}>
        <Item />
      </View>
      <View style={styles.item}>
        <Item />
      </View>
      <View style={styles.item}>
        <Item />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  item: {
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
