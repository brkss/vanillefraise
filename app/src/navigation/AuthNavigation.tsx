import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, Splash, Register, OtherSpecialCondition } from "../screens";

export const AuthNavigation: React.FC = () => {
  const { Group, Screen, Navigator } = createStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Group>
        <Screen name={"register"} component={Register} />
        <Screen name={"login"} component={Login} />
        <Screen name={"splash"} component={Splash} />
      </Group>
      <Group screenOptions={{ presentation: "modal" }}>
        <Screen name={"osc"} component={OtherSpecialCondition} />
      </Group>
    </Navigator>
  );
};
