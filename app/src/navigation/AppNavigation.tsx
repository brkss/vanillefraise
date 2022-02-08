import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Home,
  Splash,
  Settings,
  Recipes,
  Activity,
  Reminder,
  CreateRecord,
} from "../screens";
import Ionicons from "react-native-vector-icons/Ionicons";

export const AppNavigation: React.FC = () => {
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
          else if (route.name == "Activity")
            iconName = focused ? "ios-eye" : "ios-eye-outline";
          else if (route.name == "Reminders")
            iconName = focused ? "ios-time" : "ios-time-outline";
          else if (route.name == "Record")
            iconName = focused ? "ios-add-circle" : "ios-add-circle-outline";

          // You can return any component that you like here!
          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Group>
        <Screen name={"Recipes"} component={Recipes} />
        <Screen name={"Activity"} component={Activity} />
        <Screen name={"Record"} component={CreateRecord} />
        <Screen name={"Reminders"} component={Reminder} />
        <Screen name={"Settings"} component={Settings} />
      </Group>
    </Navigator>
  );
};
