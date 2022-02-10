import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Reminder, CreateReminder } from "../screens";

export const RemindersNavigation: React.FC = () => {
  const { Group, Screen, Navigator } = createStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Group>
        <Screen name={"Reminder"} component={Reminder} />
      </Group>
      <Group screenOptions={{ presentation: "modal" }}>
        <Screen name={"CreateReminder"} component={CreateReminder} />
      </Group>
    </Navigator>
  );
};
