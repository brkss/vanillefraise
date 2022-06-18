import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { DietConfiguration, DietSettings } from '../screens/Diet';

export const DietNavigation : React.FC = () => {

  const { Navigator, Screen, Group } = createStackNavigator();

  return (
    <Navigator>
      <Group screenOptions={{headerShown: false}}>
        <Screen name={'Configuration'} component={DietConfiguration} />
        <Screen name={'DietSettings'} component={DietSettings} />
      </Group>
    </Navigator>
  )

}
