import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { RecipeNutritionItem } from "./Item";
import { nutrition_data } from "../../utils/data/nutritions.data";
import { useTotalNutritionQuery } from "../../generated/graphql";

interface Props {
  recipeId: string;
}

export const RecipeNutrition: React.FC<Props> = ({ recipeId }) => {
  const [nutrition, setNutrition] = React.useState([]);
  const { data, loading, error } = useTotalNutritionQuery({
    variables: {
      recipe_id: recipeId,
    },
    onCompleted: (res) => {
      if (res.getRecipeNutrition.totalNutrition.length > 0) {
        const v = res.getRecipeNutrition.totalNutrition.sort(
          ({ quantity: a }, { quantity: b }) => b - a
        );
        setNutrition(v);
      }
      console.log("recipe nutrition result : ", res);
    },
  });

  if (loading || error) {
    return <View />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Nutrition Facts</Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {nutrition.map((nut, key) => (
          <RecipeNutritionItem
            key={key}
            label={nut.label}
            quantity={nut.quantity}
            unit={nut.unit}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //padding: 10,
    borderRadius: 13,
    minHeight: 100,
    justifyContent: "center",
    marginTop: 20,
  },
  label: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#1F1F1F",
  },
  quantity: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#1F1F1F",
  },
  unit: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#1F1F1F",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
