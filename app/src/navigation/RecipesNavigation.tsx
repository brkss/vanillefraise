import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Recipes, RecipeDetails, Cooking } from "../screens";

export const RecipeNavigation: React.FC = () => {
  const { Group, Screen, Navigator } = createStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Group>
        <Screen name={"ListRecipes"} component={Recipes} />
        <Screen name={"Cooking"} component={Cooking} />
      </Group>
      <Group screenOptions={{ presentation: "modal" }}>
        <Screen name={"RecipeDetails"} component={RecipeDetails} />
      </Group>
    </Navigator>
  );
};
