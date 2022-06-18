import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

export const NoDietRecord : React.FC = () => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>0 Records Found !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container :{
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txt: {
    fontWeight: 'bold'
  },
})
