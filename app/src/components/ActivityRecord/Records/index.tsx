import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Record } from "./Item";

export const ActivityRecords: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Latest Physical Activities</Text>
      <ScrollView
        style={styles.records}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        <Record />
        <Record />
        <Record />
        <Record />
        <Record />
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
