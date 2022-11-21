import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  name: string;
  current:  number;
  target: number;
  unit: string;
}

export const TrackedElement : React.FC<Props> = ({unit, target, current, name}) => {
  
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}> 
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.value}>{current}/{target} {unit}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'gray',
    borderRadius: 18 
  },
  name: {
    fontSize: 16,
    fontFamily: 'AvNextBold',
    fontWeight: 'bold'
  },
  value: {
    fontFamily: 'AvNextBold',
    fontWeight: 'bold',
    fontSize: 16,
    opacity: .7
  }
})
