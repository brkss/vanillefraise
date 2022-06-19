import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AreaChart, Grid, YAxis } from "react-native-svg-charts";
import * as shape from "d3-shape";
import { useTrackCaloriesQuery } from "../../generated/graphql";
import { Loading } from "../General/Loading";
import moment from 'moment';
import { NoDietRecord } from './NoDietRecord';

interface Props {
  refreshing: boolean;
}

export const CaloriesIntake: React.FC<Props> = ({refreshing}) => {
  const { data, loading, error, refetch } = useTrackCaloriesQuery();

  React.useEffect(() => {
    if(refreshing){
      refetch();
    }
  }, [refreshing]);

  if (loading || error) return <Loading />;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>daily calories intake</Text>
      {
        data.trackCalories.length === 0 ? 
          <NoDietRecord /> : 
      <>
      <AreaChart
        style={{ height: 200 }}
        data={[...data.trackCalories.map((d) => d.value)]}
        contentInset={{ top: 30, bottom: 30 }}
        curve={shape.curveNatural}
        svg={{ fill: "rgba(0, 0, 0, 0.8)" }}
      ></AreaChart>
      <Text style={styles.info}>last record {moment(data.trackCalories[data.trackCalories.length - 1].date).format('DD/MM/YYYY')}</Text>
      </>}
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
