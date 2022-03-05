import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  title: string;
  value: number;
  unit: string;
}

const resize = (str: string) => {
  if (str.length > 18) return `${str.slice(0, 18)} ..`;
  return str;
};

export const NutrientItem: React.FC<Props> = ({ unit, value, title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{resize(title)}</Text>
      <Text style={styles.value}>
        {value} {unit}
      </Text>
      <View style={styles.bar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#ECE8E8",
    height: 90,
    marginBottom: 10,
    borderRadius: 14,
  },
  title: {
    fontSize: 13,
    fontWeight: "400",
    color: "#434343",
  },
  value: {
    fontSize: 21,
    fontWeight: "bold",
  },
  bar: {
    marginTop: 7,
    height: 15,
    backgroundColor: "#B7D89D",
    width: "60%",
    borderRadius: 10,
    
  },
});
