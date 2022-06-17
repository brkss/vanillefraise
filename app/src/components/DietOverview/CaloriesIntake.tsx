import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AreaChart, Grid, YAxis } from "react-native-svg-charts";
import * as shape from "d3-shape";
import { useTrackCaloriesQuery } from "../../generated/graphql";
import { Loading } from "../General/Loading";

export const CaloriesIntake: React.FC = () => {
  const { data, loading, error } = useTrackCaloriesQuery();

  if (loading || error) return <Loading />;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>daily calories intake</Text>
      <AreaChart
        style={{ height: 200 }}
        data={[...data.trackCalories.map((d) => d.value)]}
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
    opacity: 0.7,
  },
});
