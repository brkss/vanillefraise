import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PlanDetails, NutritionPlans, CreateNewPlan } from "../screens";

export const NutritionPlanNavigation: React.FC = () => {
  const { Group, Navigator, Screen } = createStackNavigator();

  return (
    <Navigator>
      <Group screenOptions={{ headerShown: false }}>
        <Screen name={"PlansList"} component={NutritionPlans} />
        <Screen name={"CreateNewPlan"} component={CreateNewPlan} />
      </Group>
      <Group screenOptions={{ headerShown: false, presentation: "modal" }}>
        <Screen name={"PlanDetails"} component={PlanDetails} />
      </Group>
    </Navigator>
  );
};
