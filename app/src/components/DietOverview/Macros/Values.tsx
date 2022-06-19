import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  tdee: number;
  weight: number;
}

export const MacrosValuesOverview: React.FC<Props> = ({ tdee, weight }) => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.title}>TDEE</Text>
        <Text style={styles.subtitle}>total daily energy expenditure</Text>
        <View style={{ flexDirection: "row", alignItems: "baseline" }}>
          <Text style={styles.value}>{tdee}</Text>
          <Text style={styles.unit}>cal</Text>
        </View>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Weight</Text>
        <View style={{ flexDirection: "row", alignItems: "baseline" }}>
          <Text style={styles.value}>{weight}</Text>
          <Text style={styles.unit}>Kg</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  value: {
    fontSize: 40,
    fontWeight: "bold",
  },
  unit: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 4,
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
  },
  subtitle: {
    fontSize: 10,
    fontWeight: "bold",
    opacity: 0.8,
    marginBottom: 5,
  },
  item: {
    width: "50%",
    padding: 5,
    justifyContent: "flex-end",
    //backgroundColor: "pink",
  },
});
