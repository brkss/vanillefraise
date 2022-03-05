import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TabsNavigation } from "./TabsNavigation";
import { Cooking } from "../screens";

export const AppNavigation: React.FC = () => {
  const { Group, Navigator, Screen } = createStackNavigator();

  return (
    <Navigator>
      <Group screenOptions={{ headerShown: false }}>
        <Screen name={"tabs"} component={TabsNavigation} />
        <Screen  options={{
          headerLeft: () => null
        }} name={"Cooking"} component={Cooking} />
      </Group>
    </Navigator>
  );
};
