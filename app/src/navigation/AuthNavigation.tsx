import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, Splash, Register, Intro } from "../screens";

export const AuthNavigation: React.FC = () => {
  const { Group, Screen, Navigator } = createStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Group>
        <Screen name={"intro"} component={Intro} />
        <Screen name={"splash"} component={Splash} />
        <Screen name={"register"} component={Register} />
        <Screen name={"login"} component={Login} />
      </Group>
    </Navigator>
  );
};
