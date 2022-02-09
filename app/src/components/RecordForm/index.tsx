import React from "react";
import { View, StyleSheet } from "react-native";
import { Input } from "./Input";

export const RecordForm: React.FC = () => {
  return (
    <View style={styles.container}>
      <Input />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
