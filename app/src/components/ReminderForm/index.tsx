import React from "react";
import { View, StyleSheet } from "react-native";
import { Input } from "./Input";
import { Button } from "./Button";
import { TimeInput } from "./TimeInput";
import { Categories } from "./Category";
import { useFonts } from "expo-font";

export const ReminderForm: React.FC = () => {
  const [helviticaCondensed] = useFonts({
    "helvitica-condesed": require("../../assets/helvitica-condensed.otf"),
  });

  return (
    <View style={styles.container}>
      <Categories />
      <Input />
      <TimeInput />
      <Button />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    justifyContent: "space-evenly",
    paddingBottom: 20,
  },
});
