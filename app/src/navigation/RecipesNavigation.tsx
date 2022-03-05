import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Recipes, RecipeDetails, Cooking, RecipeNutrition } from "../screens";

export const RecipeNavigation: React.FC = () => {
  const { Group, Screen, Navigator } = createStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Group>
        <Screen name={"ListRecipes"} component={Recipes} />
      </Group>
      <Group screenOptions={{ presentation: "modal" }}>
        <Screen name={"RecipeDetails"} component={RecipeDetails} />
        <Screen name={'RecipeNutrition'} component={RecipeNutrition} />
      </Group>
    </Navigator>
  );
};
