import React from 'react';
import { Pressable, View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { CDN } from '../../utils/config/defaults';

const { width } = Dimensions.get('screen')

interface Props {
  title: string;
  image: string;
  clicked: () => void;
}

export const Item: React.FC<Props> = ({image, title, clicked}) => {

  return (
    <Pressable onPress={clicked} style={styles.container}>
      <Image style={styles.img} source={{uri:`${CDN}/${image}`}} />
      <Text style={styles.title}>{title}</Text> 
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    marginRight: 30, 
    width: width - (width * 0.2) - 30,
  },
  img: {
    width: '100%',
    height: "80%",
    marginBottom: 10
  },
  title: {
    fontFamily: 'AbFace',
    fontSize: 30,
    color: 'white'
  }
})
