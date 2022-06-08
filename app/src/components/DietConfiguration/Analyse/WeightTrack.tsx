import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LineChart, Grid, YAxis } from "react-native-svg-charts";

export const WeightTrack: React.FC = () => {
  const data = [
    73, 72, 71, 70, 69, 69, 69, 69, 68, 67, 66, 65, 64, 63, 62, 62, 63, 64, 65,
    65, 66,
  ];
  const data2 = [
    50, 52, 51, 50, 59, 59, 59, 69, 68, 67, 66, 65, 64, 63, 62, 62, 63, 64, 65,
    65, 66,
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>weight track</Text>
      <View style={{ height: 200, flexDirection: "row" }}>
        <YAxis
          data={data}
          contentInset={{ top: 20, bottom: 20 }}
          svg={{
            fill: "grey",
            fontSize: 7,
          }}
          numberOfTicks={10}
          formatLabel={(value) => `${value}Kg`}
          style={{ marginRight: 10 }}
        />

        <LineChart
          style={{ flex: 1 }}
          data={data}
          
          svg={{ stroke: "rgb(0, 0, 0, .8)", strokeWidth: 3 }}
          contentInset={{ top: 20, bottom: 20 }}
        ></LineChart>
      </View>
      <Text style={styles.info}>last record 23/05/2022</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    opacity: 0.7,
  },
});
