import React from 'react';
import { View, SafeAreaView, Text, StyleSheet } from 'react-native';


export const RecipesByNutritions : React.FC = () => {


  return(
    
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.heading}>Vitamine D (D3 + D2)</Text>
        
      </SafeAreaView>
    </View>

  )

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 10,
  },
  heading: {
    fontWeight: 'bold',
    color: '#434343',
    fontSize: 22
  }
})
