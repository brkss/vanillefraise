import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Heading } from '../../components';

export const MoodOverview : React.FC = () => {


  return(
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <Heading title={'Mood \nOverview'} />
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  }
})
