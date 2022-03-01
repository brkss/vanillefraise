import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PasswordSettings, Settings, PersonalInformation } from '../screens'

export const SettingsNavigation : React.FC = () => {

  const { Group, Navigator, Screen } = createStackNavigator();

  return (
    <Navigator screenOptions={{headerShown: false}} >
      <Group>
        <Screen name={'SettingsMain'} component={Settings} />
        <Screen name={'PersonalInformation'} component={PersonalInformation} />
        <Screen name={'PasswordSettings'} component={PasswordSettings} />
      </Group>
    </Navigator>
  )
}
