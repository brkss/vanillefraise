import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Overview } from '../screens';

export const OverviewNavigation : React.FC = () => {

  const {Group, Screen, Navigator } = createStackNavigator(); 

  return(
  
    <Navigator screenOptions={{headerShown: false}}>
      <Group>
        <Screen name={'GeneralOverview'} component={Overview} />
      </Group>
    </Navigator>

  )
}
