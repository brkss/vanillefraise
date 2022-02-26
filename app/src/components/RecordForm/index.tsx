import React from "react";
import { View, StyleSheet } from "react-native";
import { Input } from "./Input";
import { TimeInput } from "./TimeInput";
import { Button } from "../General/Button";

interface Props {
  valueChange: (value: number) => void;
  timeChange: (time: Date) => void;
  dateChange: (date: Date) => void;
  unit: string;
  onSave: () => void;
  value: string;
}

export const RecordForm: React.FC<Props> = ({value, valueChange, unit, timeChange, dateChange, onSave}) => {
  return (
    <View style={styles.container}>
      <Input unit={unit} value={value} onChange={(v: string) => valueChange(Number(v))} />
      <TimeInput onDateChange={(date) => dateChange(date)} onTimeChange={(time) => timeChange(time)} />
      <Button txt="Save" clicked={() => onSave()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
