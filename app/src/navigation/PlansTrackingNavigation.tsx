import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PlansTrackingOverview, NutritionInfo } from '../screens';

export const PlansTrackingNavigation : React.FC = () => {
  
  const { Group, Screen, Navigator } = createStackNavigator();

  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Group>
        <Screen name={'PlansTracking'} component={PlansTrackingOverview} />
      </Group>
      <Group screenOptions={{presentation: 'modal'}}>
        <Screen name={"NutritionInfo"} component={NutritionInfo} />
      </Group>
    </Navigator>
  )
}
