import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const NutritionPlans : React.FC = () => {

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text>Nutrition Plans </Text>
    </SafeAreaView>
    </View>
  )  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
