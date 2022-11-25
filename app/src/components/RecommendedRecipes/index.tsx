import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Item } from "./Item";
import { useRecommendedRecipesQuery } from "../../generated/graphql";

interface Props {
  navigation: any;
  refreshing: boolean;
}

export const RecomendedRecipes: React.FC<Props> = ({
  navigation,
  refreshing,
}) => {
  const _recipes = useRecommendedRecipesQuery({
    fetchPolicy: "cache-first",
  });

  React.useEffect(() => {
    if (refreshing) _recipes.refetch();
  }, [refreshing]);

  if (_recipes.loading || _recipes.error) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recomended Recipes</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {_recipes.data.recommendedRecipes.map((recipe, key) => (
          <Item
            index={key}
            clicked={() => {
              navigation.push("RecipeDetails", { id: recipe.id });
            }}
            key={key}
            image={recipe.image}
            title={recipe.name}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    fontFamily: "AvNextBold",
    fontSize: 17,
    marginBottom: 10,
    color: "#434343"
  },
});
