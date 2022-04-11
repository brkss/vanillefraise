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
  RecipesByNutritions
} from "../screens";

export const AppNavigation: React.FC = () => {
  const { Group, Navigator, Screen } = createStackNavigator();

  return (
    <Navigator>
      <Group screenOptions={{ headerShown: false, cardStyle: {backgroundColor: 'black'} }}>
        <Screen name={"tabs"} component={TabsNavigation} />
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
      </Group>
      <Group screenOptions={{ presentation: "modal", headerShown: false }}>
        <Screen name={"RecipeDetails"} component={RecipeDetails} />
        <Screen name={"RecipesByNutritions"} component={RecipesByNutritions} />
      </Group>
      <Group
        screenOptions={{
          headerShown: false,
          presentation: "modal",
          cardStyle: {
            backgroundColor: "transparent",
            opacity: 0.99,
          },
        }}
      >
        
        <Screen name={"MealsOptions"} component={MealsOptions} />
      </Group>
    </Navigator>
  );
};
