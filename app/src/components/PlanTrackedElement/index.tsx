import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  name: string;
  value: number;
  unit: string;
}

const ADJUST_STR = (s: string) => {
  if (s.length > 25) return `${s.slice(0, 22)}...`;
  return s;
};

export const PlanTrackElement: React.FC<Props> = ({ name, value, unit }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{ADJUST_STR(name)}</Text>
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
    backgroundColor: "#ECE8E8",
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
