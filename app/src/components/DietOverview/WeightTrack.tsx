import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LineChart, Grid, YAxis } from "react-native-svg-charts";
import { useTrackWeightQuery } from "../../generated/graphql";
import { Loading } from "../General/Loading";
import { NoDietRecord } from "./NoDietRecord";
import moment from "moment";

interface Props {
  refreshing: boolean;
}

export const WeightTrack: React.FC<Props> = ({ refreshing }) => {
  const { data, loading, error, refetch } = useTrackWeightQuery();

  React.useEffect(() => {
    if (refreshing) {
      refetch();
    }
  }, [refreshing]);
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
              data={[...data.trackWeight.map((d) => d.value)]}
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
              data={[...data.trackWeight.map((d) => d.value)]}
              svg={{ stroke: "rgb(0, 0, 0, .8)", strokeWidth: 3 }}
              contentInset={{ top: 20, bottom: 20 }}
            ></LineChart>
          </View>
          <Text style={styles.info}>
            last record{" "}
            {moment(data.trackWeight[data.trackWeight.length - 1].date).format(
              "DD/MM/YYYY"
            )}
          </Text>
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
