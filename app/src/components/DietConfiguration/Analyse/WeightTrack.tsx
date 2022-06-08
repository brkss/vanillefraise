import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LineChart, Grid } from "react-native-svg-charts";

export const WeightTrack: React.FC = () => {
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Weight</Text>
      <LineChart
        style={{ height: 200 }}
        data={data}
        svg={{ stroke: "rgb(0, 0, 0, .8)", strokeWidth: 3 }}
        contentInset={{ top: 20, bottom: 20 }}
      ></LineChart>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
