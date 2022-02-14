import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Activity, NewActivity } from "../screens";

export const ActivityNavigation: React.FC = () => {
  const { Group, Screen, Navigator } = createStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Group>
        <Screen name={"Activity"} component={Activity} />
      </Group>
      <Group screenOptions={{ presentation: "modal" }}>
        <Screen name={"NewActivity"} component={NewActivity} />
      </Group>
    </Navigator>
  );
};
