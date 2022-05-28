import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { IngredientItem } from "./Item";
import { RecipeServing } from "./Servings";
import { Ingredient } from "../../generated/graphql";
import { scaleRecipe } from "../../utils/modules/scale_recipe";

interface Props {
  ingredients: Ingredient[];
  servings: number;
}

export const Ingredients: React.FC<Props> = ({ ingredients, servings }) => {
  const [scale, setScale] = React.useState<number>(servings);

  return (
    <View style={styles.container}>
      <RecipeServing servings={servings} onChange={(n: number) => {setScale(n)} } />
      <Text style={styles.title}>Ingredients</Text>
      {scaleRecipe(servings, scale, ingredients).map((ing, key) => (
        <IngredientItem
          key={key}
          txt={ing.ingredients}
          amount={ing.amount}
          unit={ing.unit}
        />
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
