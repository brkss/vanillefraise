import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Item } from "./Item";
import { useRecommendedRecipesQuery } from "../../generated/graphql";

interface Props {
  navigation: any;
}

export const RecomendedRecipes: React.FC<Props> = ({ navigation }) => {
  const _recipes = useRecommendedRecipesQuery({
    fetchPolicy: "cache-first",
  });

  if (_recipes.loading || _recipes.error) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recomended Recipes</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {_recipes.data.recommendedRecipes.map((recipe, key) => (
          <Item clicked={() => { navigation.push("RecipeDetails", { id: recipe.id }) }} key={key} image={recipe.image} title={recipe.name} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    fontFamily: "AvNextBold",
    fontSize: 20,
    marginBottom: 10,
  },
});
