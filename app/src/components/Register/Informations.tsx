import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { InvisibleInput } from "../General/InvisibleInput";
import { Button } from "../General/Button";

export const RegisterInformation: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>INFORMATION {"\n"}ABOUT YOU </Text>
      <View style={styles.form}>
        <InvisibleInput label={"NAME"} txtChange={(v) => {}} />
        <InvisibleInput label={"EMAIl"} txtChange={(v) => {}} />
        <InvisibleInput label={"PASSWORD"} txtChange={(v) => {}} />
        <InvisibleInput label={"RE-PASSWORD"} txtChange={(v) => {}} />
        <Button txt={"SAVE"} clicked={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 40,
    fontFamily: "helvitica-condesed",
    fontWeight: "bold",
    color: "#434343",
  },
  form: {
    flex: 1,
    justifyContent: "space-evenly",
  },
});
