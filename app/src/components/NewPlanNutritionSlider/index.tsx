import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Item } from "./Item";

interface IAlterdNutrition {
  id: string;
  name: string;
  value: number;
  unit: string;
  recommended: number;
}

interface Props {
  edit: (id: string) => void;
  category: any;
  nutritions: any[];
  changedElements: IAlterdNutrition[];
}

export const NewPlanNutritionSlider: React.FC<Props> = ({
  edit,
  nutritions,
  category,
  changedElements,
}) => {
  const valHasChanged = (id: string, val: number): number => {
    const index = changedElements.findIndex((x) => x.id === id);
    if (index === -1) return val;
    else return changedElements[index].value;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category.name}</Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {nutritions.map((nutrition, key) => (
          <Item
            recommended={valHasChanged(
              nutrition.nutrition.id,
              nutrition.recommendation
            )}
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
