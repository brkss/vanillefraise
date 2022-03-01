import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { Heading } from '../../components';

export const RecipeNutrition : React.FC = () => {

  return(
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <Heading title={'Nutrition Facts'} />
        <View>
          <Text>Something !</Text> 
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 10
  },

})
