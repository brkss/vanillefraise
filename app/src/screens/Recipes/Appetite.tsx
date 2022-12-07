import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { AppetiteRecipeSlider } from '../../components';

import Ionicons from 'react-native-vector-icons/Ionicons'

export const Appetite : React.FC<any> = ({navigation}) => {

  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        
        <Text style={styles.title}>Listen{'\n'}to your appetite</Text>
        <AppetiteRecipeSlider clicked={(id) => navigation.navigate("RecipeDetails", {id: id})} />
        <View style={styles.close}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.cbtn}>
            <Ionicons size={20} color={'#424242'} name={'close-outline'} />
          </TouchableOpacity>
        </View>
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
  },
  close:{
    position: 'absolute',
    top: 50,
    right: 20,
    
  },
  cbtn: {
    height: 40,
    width: 40,
    backgroundColor: 'white',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  closeTxt: {
    color: 'white',
  }
})
