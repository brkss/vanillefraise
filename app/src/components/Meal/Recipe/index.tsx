import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RecipeThumbnail } from "../../RecipeThumbnail";
import { CDN } from "../../../utils/config/defaults";
import { NoMealFound } from "./Nothing";
import {
  useRemoveRecipeMutation,
  GetMealRecipesQuery,
  GetMealRecipesDocument,
} from "../../../generated/graphql";

interface Props {
  recipes: any[];
  navigation: any;
  mealids: any[];
}

export const MealRecipes: React.FC<Props> = ({
  recipes,
  mealids,
  navigation,
}) => {
  const [removeRecipe] = useRemoveRecipeMutation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipes</Text>
      <View style={styles.recipes}>
        {recipes.length > 0 ? (
          recipes.map((recipe, key) => (
            <RecipeThumbnail
              pressed={() =>
                navigation.push("RecipeDetails", {
                  id: recipe.id,
                  frommeal: true,
                })
              }
              title={recipe.name}
              img={`${CDN}/${recipe.image}`}
              time={recipe.total}
              carbs={recipe.carbs}
              key={key}
            />
          ))
        ) : (
          <NoMealFound />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    marginTop: 20,
  },
  recipes: {
    marginTop: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 34,
    fontFamily: "condensed",
    color: "#434343",
  },
  date: {
    lineHeight: 25,
    fontSize: 18,
    fontWeight: "600",
    color: "#434343",
    //fontFamily: "condensed",
  },
});
