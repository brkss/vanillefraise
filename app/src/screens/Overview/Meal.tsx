import React from 'react';
import { View, SafeAreaView, StyleSheet, Text } from 'react-native';

export const Meal : React.FC = () => {


  return(
    <View style={styles.container}>
      <SafeAreaView style={{flex : 1}}>
        <Text style={styles.title}>BREAKFAST</Text>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold'
  }
})
