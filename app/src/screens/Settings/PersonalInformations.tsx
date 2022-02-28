import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Heading, Input } from '../../components';

export const PersonalInformation : React.FC = () => {

  return(
    <View style={styles.container}>
      <SafeAreaView>
        <Heading title={'Personal Informations'} />
        <View>
          <Input onChange={() => {}} label={'Name'}  />
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  
})
