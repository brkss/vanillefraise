import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';

export const ReminderCheckBox : React.FC = () => {

  return (
    <Pressable style={styles.container}>
      <View style={styles.row}>
        <View style={styles.circle} />
        <Text style={styles.txt}>Remind Me</Text>
        <Text style={styles.status}>OFF</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container:{
    padding: 10,
    backgroundColor: '#DCD9D9',
    borderRadius: 7
  },
  row: {
    flexDirection: 'row'
  },
  circle: {
    height: 10,
    width: 10
  }
})
