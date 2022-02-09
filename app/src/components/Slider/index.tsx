import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Item } from "./Item";

export const Slider: React.FC = () => {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      horizontal
    >
      <Item />
      <Item />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
});
