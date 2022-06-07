import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { DailyActivity } from "./DailyActivity";
import { BodyMeasurements } from "./BodyMeasurements";

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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  contentContainer: {
    //
  },
});
