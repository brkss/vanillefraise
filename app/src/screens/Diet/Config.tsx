import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

export const DietConfiguration : React.FC = () => {

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.heading}>Time Schedule</Text>
      </SafeAreaView>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
  }
})
