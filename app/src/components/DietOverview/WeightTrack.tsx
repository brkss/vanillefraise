import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LineChart, Grid, YAxis } from "react-native-svg-charts";
import { useTrackWeightQuery } from "../../generated/graphql";
import { Loading } from "../General/Loading";
import { NoDietRecord } from './NoDietRecord';

export const WeightTrack: React.FC = () => {
  const { data, loading, error } = useTrackWeightQuery();
  if (loading || error) return <Loading />;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>weight track</Text>
      {data.trackWeight.length === 0 ? (
        <NoDietRecord />
      ) : (
        <>
          <View style={{ height: 200, flexDirection: "row" }}>
            <YAxis
              data={[...data.trackWeight]}
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
              data={[...data.trackWeight]}
              svg={{ stroke: "rgb(0, 0, 0, .8)", strokeWidth: 3 }}
              contentInset={{ top: 20, bottom: 20 }}
            ></LineChart>
          </View>
          <Text style={styles.info}>last record 23/05/2022</Text>
        </>
      )}
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
