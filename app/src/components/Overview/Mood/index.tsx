import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Loading } from "../../General/Loading";
import { MoodStatsItem } from "./Item";
import { useMoodOverviewQuery } from "../../../generated/graphql";

export const MoodStats: React.FC = () => {
  const { loading, error, data } = useMoodOverviewQuery();

  if (loading || error) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {data.moodOverview.data.map((mood, key) => (
          <View key={key} style={styles.item}>
            <MoodStatsItem
              percent={Math.floor(mood.percent)}
              icon={mood.icon}
              title={mood.name}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    width: "20%",
  },
});
