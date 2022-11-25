import React from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

interface Props {
  reload: () => void
}

export const SomethingElse : React.FC<Props> = ({reload}) => {


  return (
    <Pressable onPress={reload} style={styles.container}>
      <Text style={styles.title}>Something Else ?</Text>
    </Pressable>
  )
}


const styles = StyleSheet.create({
  container: {
    height: '80%',
    width: width - (width * 0.2) - 30,
    //width: '100%',
    backgroundColor: '#242424',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontFamily: 'AbFace',
    fontSize: 25,
    color: 'white'
  }
})
