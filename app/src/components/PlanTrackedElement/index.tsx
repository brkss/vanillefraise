import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  name: string;
  value: number;
  unit: string;
}

export const PlanTrackElement: React.FC<Props> = ({ name, value, unit }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.value}>
        {value} {unit}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    paddingVertical: 25,
    backgroundColor: "#fff",
    borderRadius: 18,
    justifyContent: "space-between",
    marginBottom: 10,
  },
  name: {
    fontFamily: "AvNextBold",
    fontSize: 20,
    fontWeight: "bold",
    color: "#434343",
  },
  value: {
    fontSize: 20,
    fontFamily: "AvNextBold",
    color: "#434343",
  },
});
