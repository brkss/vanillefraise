import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

export const NutritionInfo : React.FC<any> = ({route}) => {
  
  const { code, title } = route.params;

  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <Text style={styles.title}>{title}</Text>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontFamily: 'AvNextBold',
    fontWeight: 'bold',
    fontSize: 20
  }
})
