import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { PieChart } from "react-native-svg-charts";

const COLORS = ["#EEB868", "#E5C3D1", "#8FD5A6"];

export const Macronutrients: React.FC = () => {
  const data = [
    {
      name: "Carbs",
      color: COLORS[0],
      value: 45,
    },
    {
      name: "Protein",
      color: COLORS[1],
      value: 20,
    },
    {
      name: "FAT",
      color: COLORS[2],
      value: 35,
    },
  ];

  const pieData = data
    .filter((val) => val.value > 0)
    .map((value, index) => ({
      value: value.value,
      svg: {
        fill: value.color,
        onPress: () => console.log("part of pie chart clicked !"),
      },
      key: `pie-${index}`,
    }));

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.item}>
          {data.map((i, key) => (
            <View style={styles.keyContainer}>
              <View style={[styles.color, { backgroundColor: i.color }]} />
              <Text style={styles.key}>{i.name}</Text>
            </View>
          ))}
        </View>
        <View style={styles.item}>
          <PieChart data={pieData} style={{ height: 150 }} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //marginTop: 40,
  },
  row: {
    flexDirection: "row",
  },
  item: {
    width: "50%",
  },
  keyContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  color: {
    height: 20,
    width: 20,
    borderRadius: 20,
    backgroundColor: "red",
    marginRight: 10,
  },
  key: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
