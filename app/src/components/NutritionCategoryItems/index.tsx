import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NutrientItem } from "./Item";

const data = [
  {
    unit: "g",
    value: 10,
    title: "test",
    recomended: 100,
  },
  {
    unit: "g",
    value: 10,
    title: "test",
    recomended: 100,
  },
  {
    unit: "g",
    value: 10,
    title: "test",
    recomended: 100,
  },
  {
    unit: "g",
    value: 10,
    title: "test",
    recomended: 100,
  },
  {
    unit: "g",
    value: 10,
    title: "test",
    recomended: 100,
  },
];

export const NutritionCategoryItems: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {data.map((item, key) => (
          <View key={key} style={styles.item}>
            <NutrientItem
              clicked={() => {}}
              recomended={100}
              title={"test"}
              unit={"ug"}
              value={29}
              selected={key === 0}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  item: {
    width: "50%",
  },
});
