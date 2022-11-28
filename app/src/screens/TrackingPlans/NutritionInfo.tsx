import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Loading, NutritionIntakeChart, TrackedElementDailyIntake } from '.././../components';
import { useElementIntakeQuery } from '../../generated/graphql';

export const NutritionInfo : React.FC<any> = ({route}) => {
  
  const { code, title, id } = route.params;
  const { data, loading, error } = useElementIntakeQuery({
    variables: {
      id: id
    }
  })

  if(loading || error || !data)
    return <Loading />

  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false} >
          <Text style={styles.title}>{title}</Text>
          {data!.elementIntake!.length > 0 && <NutritionIntakeChart code={code} unit={'mg'} title={title} refreshing={false}  />}
          {
            data?.elementIntake.length === 0 ?
              <Text style={styles.subtitle}>No Data Found</Text>
            : <Text style={styles.subtitle}>Daily Intake History </Text> 
          }
          {
            data?.elementIntake.map((elm, key) => (
              <TrackedElementDailyIntake date={elm.date} unit={elm.unit} title={title} intake={elm.intake} target={elm.target}  />
            ))
          }
          <View style={{height: 100}} />
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  title: {
    fontFamily: 'AvNextBold',
    fontWeight: 'bold',
    fontSize: 30,
    display: 'none'
  },
  subtitle: {
    marginTop: 25,
    marginBottom: 20,
    fontFamily: 'AvNextBold',
    fontWeight: 'bold',
    fontSize: 25,
  },
})
