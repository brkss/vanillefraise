import React from 'react';
import { View, Text, StyleSheet} from 'react-native';


export const SpecialBadge : React.FC = () => {

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.txt}>Been Here From The Start</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C5FFD3",
    padding: 5,
    borderRadius: 5
 },
  txt: {
    fontWeight: 'bold',
    fontSize: 11,
    fontFamily: 'AvNextBold'
  }
})
