import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CreateRecord, MentalHealthIntro } from "../screens";
import { RecipeNavigation } from "./RecipesNavigation";
import { ActivityNavigation } from "./ActivityNavigation";
import { SettingsNavigation } from "./SettingsNavigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import { OverviewNavigation } from "./OverviewNavigation";

export const TabsNavigation: React.FC = () => {
  const { Group, Screen, Navigator } = createBottomTabNavigator();

  return (
    <Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Settings")
            iconName = focused ? "ios-settings" : "ios-settings-outline";
          else if (route.name == "Recipes")
            iconName = focused ? "ios-disc" : "ios-disc-outline";
          else if (route.name == "Overview")
            iconName = focused ? "ios-newspaper" : "ios-newspaper-outline";
          else if (route.name == "Activity")
            iconName = focused ? "ios-eye" : "ios-eye-outline";
          else if (route.name == "Reminders")
            iconName = focused ? "ios-time" : "ios-time-outline";
          else if (route.name == "Record")
            iconName = focused ? "ios-add-circle" : "ios-add-circle-outline";
          else if (route.name == "Mental")
            iconName = focused ? "ios-sunny" : "ios-sunny-outline";
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
        <Screen name={"Activity"} component={ActivityNavigation} />
        <Screen name={"Record"} component={CreateRecord} />
        {/*<Screen name={"Reminders"} component={RemindersNavigation} />*/}
        <Screen name={"Mental"} component={MentalHealthIntro} />
        <Screen name={"Settings"} component={SettingsNavigation} />
      </Group>
    </Navigator>
  );
};