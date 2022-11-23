import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RecipeNavigation } from "./RecipesNavigation";
//import { ActivityNavigation } from "./ActivityNavigation";
import { SettingsNavigation } from "./SettingsNavigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import { OverviewNavigation } from "./OverviewNavigation";
import { NutritionPlanNavigation } from "./PlanNavigation";
import { PlansTrackingNavigation } from './PlansTrackingNavigation';

export const TabsNavigation: React.FC = () => {
  const { Group, Screen, Navigator } = createBottomTabNavigator();

  return (
    <Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Me")
            iconName = focused ? "person" : "person-outline";
          else if (route.name == "Recipes")
            iconName = focused ? "pizza" : "pizza-outline";
          else if (route.name == "Overview")
            iconName = focused ? "albums" : "albums-outline";
          else if (route.name == "Plans")
            iconName = focused ? "reader" : "reader-outline";
          else if (route.name == "Reminders")
            iconName = focused ? "ios-time" : "ios-time-outline";
          else if (route.name == "Record")
            iconName = focused ? "ios-add-circle" : "ios-add-circle-outline";
          else if (route.name == "Tracking")
            iconName = focused ? "analytics" : "analytics-outline";
          // You can return any component that you like here!
          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Group>
        <Screen name={"Overview"} component={OverviewNavigation} />
        <Screen name={"Recipes"} component={RecipeNavigation} />
        <Screen name={"Tracking"} component={PlansTrackingNavigation} />
        <Screen name={"Plans"} component={NutritionPlanNavigation} />
        {/*<Screen name={"Activity"} component={ActivityNavigation} />*}
        {/*<Screen name={"Record"} component={CreateRecord} />*/}
        {/*<Screen name={"Reminders"} component={RemindersNavigation} />*/}
        <Screen name={"Me"} component={SettingsNavigation} />
      </Group>
    </Navigator>
  );
};
