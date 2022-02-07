import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Splash } from "../screens";

export const AppNavigation: React.FC = () => {
  const { Group, Screen, Navigator } = createStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Group>
        <Screen name={"home"} component={Home} />
      </Group>
    </Navigator>
  );
};
