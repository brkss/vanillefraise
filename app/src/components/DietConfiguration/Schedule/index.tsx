import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NextButton } from "../NextButton";
import { MealTime } from "./MealTime";

interface Props {
  next: () => void;
}

export const ConfigureMealSchedule: React.FC<Props> = ({ next }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>EATING SCHEDULE</Text>
      <Text style={styles.subtitle}>
        when you eat is just as important as what you eat
      </Text>
      <View style={styles.contentContainer}>
        <MealTime name={"BREAKFAST"} />
        <MealTime name={"LUNCH"} />
        <MealTime name={"DINNER"} />
        <MealTime name={"SNACK"} />
      </View>
      <NextButton pressed={next} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.8,
    textAlign: "center",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "space-evenly",
  },
});
