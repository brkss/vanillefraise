import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Option } from "./Item";

export const MealOptionsSelect: React.FC = () => {
  return (
    <View style={styles.container}>
      <Option pressed={() => {}} selected={false} txt={"BREAKFAST"} />
      <Option pressed={() => {}} selected={false} txt={"LUNCH"} />
      <Option pressed={() => {}} selected={false} txt={"DINNER"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
});
