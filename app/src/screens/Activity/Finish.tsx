import React from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import { useFonts } from "expo-font";
import { ExerciseFeedBack, Button } from "../../components";

export const FinishExercise: React.FC<any> = ({route}) => {

  const { catid, hours, minutes, seconds } = route.params;

  const [helviticaCondensed] = useFonts({
    "helvitica-condesed": require("../../assets/helvitica-condensed.otf"),
  });


  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={styles.heading}>How Was It ?</Text>
        <View style={styles.info}>
          <Text style={styles.infoText}>Tennis for 1:02:00</Text>
          <View style={{ marginTop: 20 }}>
            <ExerciseFeedBack />
          </View>
        </View>
        <Button txt={'SAVE IT'} clicked={() => {}} />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  heading: {
    fontFamily: "helvitica-condesed",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#434343",
  },
  info: {
    flex: 1,
    justifyContent: "center",
  },
  infoText: {
    fontFamily: "helvitica-condesed",
    fontSize: 25,
    fontWeight: "bold",
    color: "#434343",
    textAlign: "center",
  },
});
