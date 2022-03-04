import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import { ActiveAction, ActiveReminder, ActiveTimer } from "../../components";

interface ITime {
  seconds: number;
  minutes: number;
  hours: number;
}

export const Active: React.FC<any> = ({ route, navigation }) => {
  const { time, catid } = route.params;
  const [currentTime, SetCurrentTime] = React.useState<ITime>({
    seconds: 0,
    minutes: 0,
    hours: 0,
  });

  const [helviticaCondensed] = useFonts({
    "helvitica-condesed": require("../../assets/helvitica-condensed.otf"),
  });

  if (!helviticaCondensed) return <View />;

  const activityData = () => {
    const data = {
      duration: {
        seconds: currentTime.seconds,
        minutes: currentTime.minutes,
        hours: currentTime.hours,
      },
      category: catid,
    };
    console.log(
      `time ${currentTime.hours}:${currentTime.minutes}:${currentTime.seconds}`
    );
    navigation.push("FinishExercise", {
      hours: currentTime.hours,
      minutes: currentTime.minutes,
      seconds: currentTime.seconds,
      catid: catid
    });
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.reminderContainer}>
          <ActiveReminder />
        </View>
        <View style={styles.timeContainer}>
          <ActiveTimer
            time={time}
            timeChange={(t: ITime) => SetCurrentTime(t)}
          />
        </View>
        <View style={styles.actionsContainer}>
          <Text style={styles.support}>You're doing great </Text>
          <ActiveAction stop={() => activityData()} />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#1E1E1E",
  },
  timeContainer: {
    flex: 0.33,
    justifyContent: "center",
    alignItems: "center",
  },

  reminderContainer: {
    flex: 0.33,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  reminder: {
    width: "100%",
    height: 70,
    backgroundColor: "white",
    borderRadius: 16,
    marginBottom: 10,
    opacity: 0.6,
  },
  actionsContainer: {
    flex: 0.33,
    justifyContent: "space-evenly",
  },
  support: {
    fontSize: 20,
    color: "white",
    opacity: 0.66,
    fontFamily: "helvitica-condesed",
    textAlign: "center",
  },
});
