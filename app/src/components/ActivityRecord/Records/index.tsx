import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Record } from "./Item";
import { useActivitiesQuery } from "../../../generated/graphql";
import { Loading } from "../../General/Loading";

export const ActivityRecords: React.FC = () => {
  const { loading, data, error } = useActivitiesQuery();
  if (loading || error) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Latest Physical Activities</Text>
      <ScrollView
        style={styles.records}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        {data.activities.length == 0 && <Text>No Record Yet! :(</Text>}
        {data.activities.map((actv, key) => (
          <Record
            name={actv.category.name}
            icon={actv.category.icon}
            calories={actv.calories}
            date={actv.created_at}
            key={key}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 20,
  },
  records: {
    marginTop: 10,
  },
});
