import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { InvisibleInput } from "../General/InvisibleInput";
import { Button } from "../General/Button";

export const RegisterInformation: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Basic {"\n"}Informations</Text>
      <View style={styles.form}>
        <InvisibleInput label={"NAME"} txtChange={(v) => {}} />
        <InvisibleInput
          type={"emailAddress"}
          label={"EMAIl"}
          txtChange={(v) => {}}
        />
        <InvisibleInput secure label={"PASSWORD"} txtChange={(v) => {}} />
        <InvisibleInput secure label={"RE-PASSWORD"} txtChange={(v) => {}} />
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
    marginTop: 10,
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
