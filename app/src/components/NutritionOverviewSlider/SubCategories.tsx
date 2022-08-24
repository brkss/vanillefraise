import React from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";

const tmp = [
  {
    name: "Vitamin A",
  },
  {
    name: "Vitamin B-6",
  },
  {
    name: "Vitamin E",
  },
  {
    name: "Vitamin C",
  },
  {
    name: "Vitamin D",
  },
];

export const NutritionSubCategories: React.FC = () => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={styles.container}
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
    //
  },
  txt: {
    fontSize: 12,
    fontWeight: "bold",
  },
  item: {
    paddingHorizontal: 17,
    paddingVertical: 10,
    backgroundColor: "#FFDFDF",
    marginRight: 7,
    borderRadius: 10,
  },
});
