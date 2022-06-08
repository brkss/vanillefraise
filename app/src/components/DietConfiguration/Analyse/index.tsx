import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NextButton } from "../NextButton";
import { CaloriesIntake } from "./CaloriesIntake";
import { WeightTrack } from "./WeightTrack";

interface Props {
  previous: () => void;
}

export const DietAnalyse: React.FC<Props> = ({ previous }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Track, Analyze and Adjust</Text>
      <View style={styles.content}>
        <CaloriesIntake />
        <WeightTrack />
      </View>
      <NextButton
        next={() => {}}
        previous={previous}
        showNext={false}
        showPrevious
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  content: {
    flex: 1,
  },
});
