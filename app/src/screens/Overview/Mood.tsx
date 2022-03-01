import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Heading } from '../../components';
import { MoodStats } from '../../components';

export const MoodOverview : React.FC = () => {


  return(
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <Heading title={'Overview'} />
        <View>
          <MoodStats />
        </View>
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
