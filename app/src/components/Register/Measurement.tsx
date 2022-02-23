import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { InvisibleInput } from "../General/InvisibleInput";
import { Button } from "../General/Button";
import { IMeasurementData } from '../../utils/types/Register';

interface Props {
  pass: (data: IMeasurementData) => void;
}

export const Measurement: React.FC<Props> = ({pass}) => {

  const [form, SetForm] = React.useState<any>();
  const handleForm = (key: string, value: string) => {
    SetForm({
      ...form,
      [key]: value
    });
  }
  
  const saveData = () => {
    if(!form || !form.weight || !form.height || !form.age)
      return;
    pass(form as any);
  }

  return (
    <View style={styles.container}>
      <InvisibleInput unit={"KG"} label={"WEIGHT"} txtChange={(t) => handleForm('weight', t)} />
      <InvisibleInput unit={"CM"} label={"HEIGHT"} txtChange={(t) => handleForm('height', t)} />
      <InvisibleInput unit={"YEARS"} label={"AGE"} txtChange={(t) => handleForm('age', t)} />
      <Button clicked={() => saveData()} txt={"SAVE"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
  },
});
