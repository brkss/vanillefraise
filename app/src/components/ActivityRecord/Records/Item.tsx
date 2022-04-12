import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export const Record : React.FC = () => {

  return(
    <View style={styles.container}>
      <Text style={styles.icon}>🏃‍♀️</Text>
      <Text style={styles.txt}>RUN</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding: 5,
  },
  txt: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#434343'
  },
  icon: {
    fontSize: 30,
  }
})
