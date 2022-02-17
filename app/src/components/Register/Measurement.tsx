import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { InvisibleInput } from "../General/InvisibleInput";
import { Button } from "../General/Button";

export const Measurement: React.FC = () => {
  return (
    <View style={styles.container}>
      <InvisibleInput unit={"KG"} label={"WEIGHT"} txtChange={(t) => {}} />
      <InvisibleInput unit={"CM"} label={"HEIGHT"} txtChange={(t) => {}} />
      <InvisibleInput unit={"YEARS"} label={"AGE"} txtChange={(t) => {}} />
      <Button clicked={() => {}} txt={"SAVE"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
  },
});
