import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  date: string;
  title: string;
  intake: number;
  unit: string;
  target: number;
}

export const TrackedElementDailyIntake : React.FC<Props> = ({date, unit, title, intake, target}) => {

  return (
    <View style={styles.container}>
      <View style={styles.row}>
      <View style={{justifyContent: 'center'}} >
        <Text style={styles.value}>{intake}/{target} {unit}</Text>
      </View>
      <View style={[{alignItems: 'flex-end'}]}>
        <Text style={styles.percent}>{(intake * 100 / target) > 100 ? ">99.9" : Math.round(intake * 100 / target)}%</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 18,
    backgroundColor: '#ECE8E8',
    marginBottom: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontWeight: 'bold',
    fontFamily: 'AvNextBold'
  },
  date: {
    fontWeight: 'bold',
    fontFamily: 'AvNextBold'
  },
  value: {
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'AvNextBold',
    alignSelf: 'center'
  },
  percent: {
    fontWeight: 'bold',
    fontFamily: 'AvNextBold'
  }
})
