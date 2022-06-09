import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { NextButton } from "../NextButton";
import { CaloriesIntake } from "./CaloriesIntake";
import { WeightTrack } from "./WeightTrack";
import { TrackMacronutrients } from "./TrackMacronutrients";
interface Props {
  previous: () => void;
}

export const DietAnalyse: React.FC<Props> = ({ previous }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Track, Analyze and Adjust</Text>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <CaloriesIntake />
        <WeightTrack />
        <TrackMacronutrients />
        <View style={{ height: 100 }} />
      </ScrollView>
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
    marginBottom: 10,
  },
});
