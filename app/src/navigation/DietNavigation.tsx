import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { DietConfiguration } from '../screens/Diet';

export const DietNavigation : React.FC = () => {

  const { Navigator, Screen, Group } = createStackNavigator();

  return (
    <Navigator>
      <Group screenOptions={{headerShown: false}}>
        <Screen name={'Configuration'} component={DietConfiguration} />
      </Group>
    </Navigator>
  )

}
