import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const PlanTrackedElement: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.index}>
          <Text style={styles.indexText}>01</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.infoTitle}>Omega-3</Text>
          <Text>
            help reduce inflammation, and make your skin less sensitive to the
            sun.
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
  },
  index: {
    marginRight: 10,
    //width: "20%",
  },
  indexText: {
    fontWeight: "bold",
    fontSize: 14,
  },
  info: {
    //width: "80%",
  },
  infoTitle: {
    fontWeight: "bold",
    fontSize: 14,
  },
});
