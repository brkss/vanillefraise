import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { Input } from "./Input";
import { Button } from "./Button";
import { TimeInput } from "./TimeInput";
import { Categories } from "./Category";
import { useFonts } from "expo-font";

export const ReminderForm: React.FC = () => {
  const [helviticaCondensed] = useFonts({
    "helvitica-condesed": require("../../assets/helvitica-condensed.otf"),
  });

  if (!helviticaCondensed)
    return (
      <View style={{ justifyContent: "center" }}>
        <ActivityIndicator />
      </View>
    );

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
    //flex: 1,
    //justifyContent: "space-evenly",
    paddingBottom: 20,
  },
});
