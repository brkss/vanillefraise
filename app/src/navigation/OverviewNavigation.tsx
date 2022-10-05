import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Overview, Meal, NutritionOverview } from "../screens";

export const OverviewNavigation: React.FC = () => {
  const { Group, Screen, Navigator } = createStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Group>
        <Screen name={"GeneralOverview"} component={Overview} />
        <Screen name={"Meal"} component={Meal} />
        <Screen name={"NutritionOverview"} component={NutritionOverview} />
      </Group>
    </Navigator>
  );
};
