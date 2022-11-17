import React from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
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
  removedRecipe: () => void;
}

export const MealRecipes: React.FC<Props> = ({
  recipes,
  mealids,
  navigation,
  removedRecipe,
}) => {
  const [removeRecipe] = useRemoveRecipeMutation();

  const confirmDeletingRecipe = (
    recipeName: string,
    mealId: string,
    recipeID: string
  ) =>
    Alert.alert("Are you sure ?", `Remove ${recipeName} from this meal `, [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Remove",
        style: "destructive",
        onPress: () => handleRemoveRecipe(mealId, recipeID),
      },
    ]);

  const getRecipeMealId = (recipeID: string): string | null => {
    for (let mr of mealids) {
      if (mr.recipe.id == recipeID) {
        return mr.id;
      }
    }
    return null;
  };

  const handleRemoveRecipe = (mealId: string, recipeId: string) => {
    if (!recipeId || !mealId) return; // trigger error ;
    console.log(`recipe id : ${recipeId} meal id : ${mealId}`);
    removeRecipe({
      variables: {
        mealid: mealId,
        recipeid: recipeId,
      },
    })
      .then((res) => {
        if (res.data.removeRecipe.status === true) removedRecipe();
        //console.log("remove recipe results : ", res);
      })
      .catch((e) => {
        console.log("something went wrong : ", e);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selected Recipes</Text>
      <View style={styles.recipes}>
        {recipes.length > 0 ? (
          recipes.map((recipe, key) => (
            <RecipeThumbnail
              pressed={() =>
                navigation.push("RecipeDetails", {
                  id: recipe.id,
                  mealId:
                    (mealids.length > 0 && getRecipeMealId(recipe.id)) || "",
                })
              }
              showDel={true}
              title={recipe.name}
              img={`${CDN}/${recipe.image}`}
              time={recipe.total}
              carbs={recipe.carbs}
              key={key}
              removeRecipe={() =>
                confirmDeletingRecipe(
                  recipe.name,
                  getRecipeMealId(recipe.id),
                  recipe.id
                )
              }
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
    fontSize: 24,
    fontFamily: "AvNextBold",
    color: "#434343",
    marginBottom: 3,
  },
  date: {
    lineHeight: 25,
    fontSize: 18,
    fontWeight: "600",
    color: "#434343",
    //fontFamily: "condensed",
  },
});
