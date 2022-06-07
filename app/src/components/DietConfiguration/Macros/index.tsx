import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { DailyActivity } from "./DailyActivity";
import { BodyMeasurements } from "./BodyMeasurements";
import { MacrosValues } from "./MacrosValues";
import { Macronutrients } from "./Macronutrients";
import { NextButton } from "../NextButton";

interface Props {
  next: () => void;
}

export const ConfigureDietMacros: React.FC<Props> = ({ next }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> MACROS </Text>
      <View style={styles.contentContainer}>
        <DailyActivity />
        <BodyMeasurements />
        <MacrosValues />
        <Macronutrients />
        <NextButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  contentContainer: {
    flex: 1,
    //backgroundColor: "red",
    //alignItems: "stretch",
    justifyContent: "space-between",
  },
});
