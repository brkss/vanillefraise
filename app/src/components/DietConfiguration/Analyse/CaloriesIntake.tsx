import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AreaChart, Grid } from "react-native-svg-charts";
import * as shape from "d3-shape";

export const CaloriesIntake: React.FC = () => {
  const data = [
    -50, -20, -40, -95, -24, -24, -85, -91, -35, -23, -13, 24, 50, 20, 80,
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Calories Intake</Text>
      <AreaChart
        style={{ height: 200 }}
        data={data}
        contentInset={{ top: 30, bottom: 30 }}
        curve={shape.curveNatural}
        svg={{ fill: "rgba(0, 0, 0, 0.8)" }}
      ></AreaChart>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
