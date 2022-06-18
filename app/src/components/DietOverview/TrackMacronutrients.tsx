import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StackedAreaChart } from "react-native-svg-charts";
import * as shape from "d3-shape";
import { useTrackMacronutrientsQuery } from "../../generated/graphql";
import { Loading } from "../General/Loading";
import moment from "moment";
import { NoDietRecord } from './NoDietRecord';

export const TrackMacronutrients: React.FC = () => {
  const { data, loading, error } = useTrackMacronutrientsQuery();

  //const colors = ["#878585", "#D8D8D8", "#3C3B3B"];
  const colors = ["#878585", "pink", "#3C3B3B"];
  const keys = ["carbs", "protein", "fat"];
  const svgs = [
    { onPress: () => console.log("apples") },
    { onPress: () => console.log("bananas") },
    { onPress: () => console.log("cherries") },
    { onPress: () => console.log("dates") },
  ];

  if (loading || error) return <Loading />;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>macronutrients tracking </Text>
      {
        data.trackMacronutrients.length === 0 ?
          <NoDietRecord /> : 
          <>
      <StackedAreaChart
        style={{ height: 200, paddingVertical: 16 }}
        data={data.trackMacronutrients}
        colors={colors}
        curve={shape.curveNatural}
        showGrid={false}
        keys={keys as any}
        //svgs={svgs as any}
      />
      <View style={styles.keys}>
        {keys.map((key, index) => (
          <View key={index} style={styles.key}>
            <View style={[styles.circle, { backgroundColor: colors[index] }]} />
            <Text style={styles.keyname}>{key}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.info}>
        last record{" "}
        {moment(
          data.trackMacronutrients[data.trackMacronutrients.length - 1].date
        ).format("DD/MM/YYYY")}
        </Text></>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ECEAEA",
    padding: 10,
    borderRadius: 15,
    marginTop: 20,
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
  keys: {
    flexDirection: "row",
    marginRight: 10,
    marginBottom: 10,
  },
  key: {
    flexDirection: "row",
    marginRight: 10,
  },
  keyname: {
    fontSize: 15,
    fontWeight: "bold",
  },
  circle: {
    height: 15,
    width: 15,
    borderRadius: 15,
    marginRight: 5,
  },
});
