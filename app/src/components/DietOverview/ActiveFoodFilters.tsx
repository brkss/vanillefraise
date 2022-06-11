import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

const tmp = [
  {
    name: "RED MEAT FREE",
  },
  {
    name: "PORK FREE",
  },
  {
    name: "VEGAN",
  },
];

export const ActiveFoodFilters: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Active Food Filters</Text>
      <ScrollView style={{ marginTop: 10 }} horizontal>
        {tmp.map((item, key) => (
          <View key={key} style={styles.item}>
            <Text style={styles.itemText}>{item.name}</Text>
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
