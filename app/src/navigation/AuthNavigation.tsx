import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, Splash } from "../screens";

export const AuthNavigation: React.FC = () => {
  const { Group, Screen, Navigator } = createStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Group>
        <Screen name={"login"} component={Login} />
        <Screen name={"splash"} component={Splash} />
      </Group>
    </Navigator>
  );
};
