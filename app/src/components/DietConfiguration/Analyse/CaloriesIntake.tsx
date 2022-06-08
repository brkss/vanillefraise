import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AreaChart, Grid, YAxis } from "react-native-svg-charts";
import * as shape from "d3-shape";

export const CaloriesIntake: React.FC = () => {
  const data = [
    -50, -20, -40, -95, -24, -24, -85, -91, -35, -23, -13, 24, 50, 20, 80,
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>daily calories intake</Text>
      <AreaChart
        style={{ height: 200 }}
        data={data}
        contentInset={{ top: 30, bottom: 30 }}
        curve={shape.curveNatural}
        svg={{ fill: "rgba(0, 0, 0, 0.8)" }}
      ></AreaChart>
      <Text style={styles.info}>last record 23/05/2022</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#ECEAEA",
    padding: 10,
    borderRadius: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  info: {
    fontSize: 12,
    fontWeight: "bold",
    opacity: .7
  },
});
