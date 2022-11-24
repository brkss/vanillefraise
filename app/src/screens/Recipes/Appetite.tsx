import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { AppetiteRecipeSlider } from '../../components';

export const Appetite : React.FC = () => {

  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <Text style={styles.title}>Listen{'\n'}to your appetite</Text>
        <AppetiteRecipeSlider />
      </SafeAreaView>
    </View>    
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    padding: 10
  },
  title: {
    fontSize: 36,
    fontFamily: 'AbFace',
    color: 'white'
  }
})
