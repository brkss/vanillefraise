import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TabsNavigation } from "./TabsNavigation";
import {
  Cooking,
  ActivityConfig,
  Active,
  FinishExercise,
  RecipeDetails,
  MealsOptions,
  RecipesByNutritions,
  DietConfiguration,
  DietOverview,
  CreateDietRecord,
  DietSettings,
  ExpandedInstruction,
  FoodFilters,
  BatchCookingConfig,
  GroceryList,
  Appetite
} from "../screens";
import { EmailVerification } from "../components";

export const AppNavigation: React.FC = () => {
  const { Group, Navigator, Screen } = createStackNavigator();

  return (
    <>
      <Navigator>
        <Group screenOptions={{ headerShown: false }}>
          <Screen name={"tabs"} component={TabsNavigation} />
          <Screen name={"Appetite"} component={Appetite} />
          <Screen
            options={{
              headerLeft: () => null,
            }}
            name={"Cooking"}
            component={Cooking}
          />
          <Screen name={"ConfigActivity"} component={ActivityConfig} />
          <Screen name={"Active"} component={Active} />
          <Screen name={"FinishExercise"} component={FinishExercise} />
          {/* -- Diet Navigation -- */}
          <Screen name={"DietOverview"} component={DietOverview} />
          <Screen name={"DietSetting"} component={DietSettings} />
          <Screen name={"DietFoodFilters"} component={FoodFilters} />
        </Group>
        <Group screenOptions={{ presentation: "modal", headerShown: false }}>
          <Screen name={"RecipeDetails"} component={RecipeDetails} />
          <Screen
            name={"RecipesByNutritions"}
            component={RecipesByNutritions}
          />
          <Screen name={"DietConfiguration"} component={DietConfiguration} />
          <Screen
            name={"ExpandedInstruction"}
            component={ExpandedInstruction}
          />
          <Screen name={"BatchCookingConfig"} component={BatchCookingConfig} />
          <Screen name={"GroceryList"} component={GroceryList} />
        </Group>
        <Group
          screenOptions={{
            cardOverlayEnabled: true,
            headerShown: false,
            presentation: "modal",
            cardStyle: {
              backgroundColor: "transparent",
              opacity: 0.99,
            },
          }}
        >
          <Screen name={"CreateDietRecord"} component={CreateDietRecord} />
          <Screen name={"MealsOptions"} component={MealsOptions} />
        </Group>
      </Navigator>
    </>
  );
};
