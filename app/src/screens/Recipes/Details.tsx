import React from "react";
import {
  View,
  Platform,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import {
  Close,
  Ingredients,
  Instructions,
  RecipeMetaData,
  Button,
  Loading,
  Info,
  RecipeNutrition,
} from "../../components";
import { useRecipeQuery, useRecipeEnergyQuery, Ingredient } from "../../generated/graphql";
import { CDN } from "../../utils/config/defaults";
//import { SafeAreaView } from "react-native-safe-area-context";

export const RecipeDetails: React.FC<any> = ({ route, navigation }) => {
  const { id, mealId } = route.params;
  const _energy = useRecipeEnergyQuery({
    variables: {
      recipe_id: id,
    },
  });
  const { data, loading, error } = useRecipeQuery({
    fetchPolicy: "cache-first",
    variables: {
      id: id,
    },
  });

  if (
    loading ||
    error ||
    !data ||
    _energy.loading ||
    _energy.error ||
    !data.recipe.status
  ) {
    return <Loading />;
  }

  return (
    <View
      style={[styles.container, { paddingTop: Platform.OS === "ios" ? 0 : 30 }]}
    >
      <View
        style={{
          //flex: 0.01,
          //position: "absolute",
          top: 0,
          height: 60,
          backgroundColor: "white",
          //marginTop: -60,
          //marginTop: Platform.OS === "ios" ? "-7%" : 0,
        }}
      >
        <Info txt={`${_energy.data.recipeEnergy} Kcal`} clicked={() => {}} />
        <Close pressed={() => navigation.popToTop()} />
        <Info txt={`${_energy.data.recipeEnergy} Kcal`} clicked={() => {}} />
      </View>
      <ScrollView
        bounces={false}
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <ImageBackground
          style={styles.image}
          source={{
            uri: `${CDN}/${data.recipe.recipe!.image}`,
          }}
        ></ImageBackground>
        <View style={styles.content}>
          <RecipeMetaData
            title={data.recipe.recipe!.name}
            description={data.recipe.recipe!.description || undefined}
            prep={data.recipe.recipe?.prep || undefined}
            cook={data.recipe.recipe?.cook || undefined}
            total={data.recipe.recipe?.total || undefined}
          />
          <RecipeNutrition recipeId={id} />
          <Ingredients servings={data.recipe.recipe.serving || 1} ingredients={data.recipe.recipe!.ingredients as Ingredient[]} />
          <Instructions
            instructions={data.recipe.recipe!.instructions.sort(
              ({ index: a }, { index: b }) => a - b
            )}
          />
          {!mealId ? (
            <Button
              //color={"#2A2A2A"}
              bg={"#595959"}
              txt={"Add To Meal"}
              clicked={() =>
                navigation.push("MealsOptions", {
                  recipe: data.recipe.recipe.id,
                })
              }
            />
          ) : (
            <Button
              //color={"#2A2A2A"}
              //bg={"#B6DA81"}
              txt={"Start Cooking"}
              clicked={() =>
                navigation.push("Cooking", {
                  id: data.recipe.recipe!.id,
                  mealId: mealId,
                })
              }
            />
          )}
          <View style={{ height: 50 }} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 300,
    width: "100%",
  },
  content: {
    padding: 10,
  },
});
