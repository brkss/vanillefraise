import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Splash } from "../screens";
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
          else if (route.name == "Time")
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
        <Screen name={"Recipes"} component={Home} />
        <Screen name={"Activity"} component={Home} />
        <Screen name={"Record"} component={Home} />
        <Screen name={"Time"} component={Home} />
        <Screen name={"Settings"} component={Home} />
      </Group>
    </Navigator>
  );
};
