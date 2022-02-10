import React from "react";
import { View, StyleSheet } from "react-native";
import { Input } from "./Input";
import { Button } from "./Button";
import { TimeInput } from "./TimeInput";

export const ReminderForm: React.FC = () => {
  return (
    <View style={styles.container}>
      <Input />
      <TimeInput />
      <Button />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});
