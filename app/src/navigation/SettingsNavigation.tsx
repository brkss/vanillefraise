import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Settings, PersonalInformation } from '../screens'

export const SettingsNavigation : React.FC = () => {

  const { Group, Navigator, Screen } = createStackNavigator();

  return (
    <Navigator screenOptions={{headerShown: false}} >
      <Group>
        <Screen name={'Settings'} component={Settings} />
        <Screen name={'PersonalInformation'} component={PersonalInformation} />
      </Group>
    </Navigator>
  )
}
