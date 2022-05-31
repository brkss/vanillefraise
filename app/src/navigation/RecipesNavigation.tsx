import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Recipes,
  RecipeDetails,
  Cooking,
  RecipeNutrition,
  SavedRecipes,
} from "../screens";

export const RecipeNavigation: React.FC = () => {
  const { Group, Screen, Navigator } = createStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Group>
        <Screen name={"ListRecipes"} component={Recipes} />
        <Screen name={"SavedRecipes"} component={SavedRecipes} />
      </Group>
    </Navigator>
  );
};
