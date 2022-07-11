import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { PieChart } from "react-native-svg-charts";

const COLORS = ["#3C3B3B", "#878585", "#D8D8D8"];

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

  console.log("pie data : ", pieData);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={[styles.item, { justifyContent: "space-between" }]}>
          {data.map((i, key) => (
            <View key={key} style={styles.keyContainer}>
              <View style={[styles.color, { backgroundColor: i.color }]} />
              <View>
                <Text style={styles.key}>{i.name}</Text>
                <Text>{i.value}% - 300g </Text>
              </View>
            </View>
          ))}
        </View>
        <View
          style={[
            styles.item,
            //{ justifyContent: "center", alignItems: "center" },
          ]}
        >
          <PieChart data={pieData} style={{ height: 130 }} />
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
    alignItems: "center",
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
