import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Activity, NewActivity, ActivityConfig } from "../screens";

export const ActivityNavigation: React.FC = () => {
  const { Group, Screen, Navigator } = createStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Group>
        <Screen name={"ActivityList"} component={Activity} />
      </Group>
      <Group>
        <Screen name={"NewActivity"} component={NewActivity} />
        <Screen name={"ConfigActivity"} component={ActivityConfig} />
      </Group>
    </Navigator>
  );
};
