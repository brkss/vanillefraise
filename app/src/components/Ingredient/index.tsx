import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { IngredientItem } from "./Item";
import { RecipeServing } from "./Servings";

interface Props {
  ingredients: any[];
}

export const Ingredients: React.FC<Props> = ({ ingredients }) => {
  return (
    <View style={styles.container}>
      <RecipeServing />
      <Text style={styles.title}>Ingredients</Text>
      {ingredients.map((ing, key) => (
        <IngredientItem key={key} txt={ing.raw} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
  title: {
    fontSize: 25,
    marginBottom: 15,
    fontWeight: "bold",
  },
});
