import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { useActiveFoodFiltersQuery } from "../../generated/graphql";
import { Loading } from "../General/Loading";

export const ActiveFoodFilters: React.FC = () => {
  const { data, loading, error } = useActiveFoodFiltersQuery();

  if (loading || error) return <Loading />;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Active Food Filters</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 10 }}
        horizontal
      >
        {data.activeFoodFilters.map((item, key) => (
          <View key={key} style={styles.item}>
            <Text style={styles.itemText}>{item.label}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  label: {
    fontWeight: "bold",
    fontSize: 20,
  },
  item: {
    padding: 6,
    paddingHorizontal: 10,
    backgroundColor: "#FFCDCD",
    marginRight: 10,
    borderRadius: 7,
  },
  itemText: {
    fontWeight: "bold",
    color: "#434343",
  },
});