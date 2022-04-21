import React from "react";
import { View, SafeAreaView, Text, StyleSheet, ScrollView } from "react-native";
import { useRecipeByNutritionQuery } from "../../generated/graphql";
import { Loading, RecipeThumbnail } from "../../components";
import { CDN } from "../../utils/config/defaults";

export const RecipesByNutritions: React.FC<any> = ({ route, navigation }) => {
  const { code, name } = route.params;
  const { loading, data, error } = useRecipeByNutritionQuery({
    variables: { code: code },
  });

  if (loading || error) return <Loading />;

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>{name}</Text>
          <Text style={styles.count}>
            {data.recipeByNutrition.length} recipes.
          </Text>
        </View>
        {data.recipeByNutrition.length > 0 ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            {data.recipeByNutrition.map((recipe, key) => (
              <RecipeThumbnail
                key={key}
                img={`${CDN}/${recipe.image}`}
                pressed={() =>
                  navigation.push("RecipeDetails", { id: recipe.id })
                }
                title={recipe.name}
                time={recipe.total}
              />
            ))}
            <View style={{ height: 200 }} />
          </ScrollView>
        ) : (
          <View style={styles.notFound}>
            <Text style={styles.notfoundText}>
              😅 Sorry, no recipes with {name} found for now.
            </Text>
          </View>
        )}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  heading: {
    fontWeight: "bold",
    color: "#434343",
    fontSize: 22,
  },
  headingContainer: {
    marginBottom: 30,
    marginTop: 10,
  },
  count: {
    opacity: 0.8,
    fontSize: 18,
  },
  notFound: {
    borderRadius: 15,
    padding: 10,
    backgroundColor: "#e3e3e3",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  notfoundText: {
    textAlign: "center",
    fontWeight: "bold",
  },
});
