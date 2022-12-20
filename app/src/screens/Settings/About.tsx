import React from 'react';
import { Image, View, Text, SafeAreaView, StyleSheet } from 'react-native';
import  Constants  from 'expo-constants';

export const About : React.FC = () => {

  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require("../../assets/icon.png")} style={styles.image} />      
        <Text style={styles.version}>Version {Constants.manifest.version}  </Text>
        <Text style={styles.info}>Private Beta </Text>
      </SafeAreaView>
    </View>
  )

}


const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  image: {
    alignSelf: 'center',
    width: 200,
    height: 200,
    //position: 'absolute'
  },
  version: {
    fontFamily: 'AbFace',
    fontSize: 25
  },
  info: {
    fontFamily: 'AvNextBold',
    fontSize: 17,
    color: '#434343',
    marginTop: 5
  }
})
