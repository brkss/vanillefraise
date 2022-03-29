import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GroceryItem } from './Item';

export const MealGrocery : React.FC = () => {

  return(
    <View style={styles.container}>
      <Text style={styles.title}>What you'll need</Text>
      <View style={styles.items}>
      <GroceryItem />
      <GroceryItem />
      <GroceryItem />
      <GroceryItem />
    </View>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    padding: 5
  },
  title: {
    fontWeight: "bold",
    fontSize: 34,
    fontFamily: "condensed",
    color: "#434343",
  },
  items: {
    marginTop: 10
  }
})
