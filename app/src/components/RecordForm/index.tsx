import React from "react";
import { View, StyleSheet } from "react-native";
import { Input } from "./Input";
import { TimeInput } from "./TimeInput";
import { Button } from "../General/Button";

export const RecordForm: React.FC = () => {
  return (
    <View style={styles.container}>
      <Input />
      <TimeInput />
      <Button txt="Save" clicked={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
