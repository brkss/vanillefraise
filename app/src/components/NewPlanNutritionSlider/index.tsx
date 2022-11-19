import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Item } from "./Item";

interface Props {
  edit: (id: string) => void;
  category: any;
  nutritions: any[];
}

export const NewPlanNutritionSlider: React.FC<Props> = ({
  edit,
  nutritions,
  category,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category.name}</Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {nutritions.map((nutrition, key) => (
          <Item
            recommended={nutrition.recommendation}
            name={nutrition.nutrition.name}
            unit={nutrition.nutrition.unit}
            pressed={() => edit(nutrition.nutrition.id)}
            key={key}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  title: {
    fontSize: 22,
    color: "#434343",
    fontWeight: "bold",
    fontFamily: "AvNextBold",
  },
});
