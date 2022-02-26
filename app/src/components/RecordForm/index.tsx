import React from "react";
import { View, StyleSheet } from "react-native";
import { Input } from "./Input";
import { TimeInput } from "./TimeInput";
import { Button } from "../General/Button";

interface Props {
  valueChange: (value: number) => void;
  unit: string;
}

export const RecordForm: React.FC<Props> = ({valueChange, unit}) => {
  return (
    <View style={styles.container}>
      <Input unit={unit} onChange={(v: string) => valueChange(Number(v))} />
      <TimeInput  />
      <Button txt="Save" clicked={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
