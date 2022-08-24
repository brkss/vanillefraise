import React from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";

const tmp = [
  {
    name: "Vitamins",
  },
  {
    name: "Minirals",
  },
  {
    name: "Fats",
  },
  {
    name: "Protein",
  },
  {
    name: "Carbohydrates",
  },
];

export const NutritionCategories: React.FC = () => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      horizontal
    >
      {tmp.map((item, key) => (
        <View key={key} style={styles.item}>
          <Text style={styles.txt}>{item.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  txt: {
    fontSize: 13,
    fontWeight: "bold",
  },
  item: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    backgroundColor: "#FAD6D6",
    marginRight: 7,
    borderRadius: 10,
  },
});
