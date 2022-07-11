import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

interface Props {
  next: () => void;
}

const steps = [
  {
    title: "1. CALCULATE YOUR MACROS.",
    description:
      "Balancing macronutrients give you the best chance of building the body you want and staying healthy without feeling deprived or exhausted",
  },
  {
    title: "2. FIND FOOD THAT FIT.",
    description:
      "Find type of food you love mix pre-exsiting diet philosophies exclude special ingredients (food allergy, health problems…)",
  },
  {
    title: "3. SET AN EATING SCHEDULE.",
    description:
      "scheduling when you eat will help you maintain a balanced diet and create a more stable energy source, as your metabolism will be engaged at optimal levels all day long.",
  },
  {
    title: "4. TRACK, ANALYZE, AND ADJUST.",
    description:
      "keep track of your meals plan, we create a record that allows you to revisit your eating habits and analyze the effectiveness of your plan, make adjustments when needed to keep yourself on track to your goal weight. Don’t be afraid to change things up if a certain dietary plan isn’t providing the desired results.",
  },
];

export const StartDietConfiguration: React.FC<Props> = ({ next }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Diet {"\n"}Configuration</Text>
      <View style={styles.line} />
      <View style={styles.contentContainer}>
        <View style={{ width: "100%" }}>
          <Text style={styles.informativeTitle}>CREATE YOUR UNIQUE DIET.</Text>
          <Text style={styles.informativeTitle}>
            YOUR TASTE, YOUR NUMBERS, YOUR BODY!
          </Text>
        </View>
        {steps.map((step, key) => (
          <View key={key} style={styles.step}>
            <Text style={styles.stepTitle}>{step.title}</Text>
            <Text style={styles.stepDescription}>{step.description}</Text>
          </View>
        ))}
        <Pressable style={styles.btn} onPress={() => next()}>
          <Text style={styles.btnText}>START</Text>
        </Pressable>
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
    //
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 4,
  },
  line: {
    borderTopWidth: 1,
    borderTopColor: "#434343",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  btn: {
    height: 100,
    width: 100,
    backgroundColor: "#414040",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
  },
  informativeTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 4,
    width: "100%",
    textAlign: "left",
  },
  step: {
    padding: 0,
    width: "100%",
  },
  stepTitle: {
    fontSize: 15,
    fontWeight: "bold",
  },
  stepDescription: {
    fontSize: 12,
    fontWeight: "300",
    opacity: 0.8,
    marginTop: 4,
  },
});
