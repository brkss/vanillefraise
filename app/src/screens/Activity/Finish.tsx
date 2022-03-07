import React from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import { useFonts } from "expo-font";
import { ExerciseFeedBack, Button, Loading } from "../../components";
import { useCreateActivityMutation } from "../../generated/graphql";

interface IFeedBack {
  id: string;
  icon: string;
  name: string;
}

const feedback: IFeedBack[] = [
  {
    id: "1",
    name: "Low",
    icon: "😴",
  },
  {
    id: "2",
    name: "Normal",
    icon: "👌",
  },
  {
    id: "3",
    name: "Intense",
    icon: "🥵",
  },
  {
    id: "4",
    name: "Strong",
    icon: "🔥",
  },
];

export const FinishExercise: React.FC<any> = ({ route, navigation }) => {
  const [selected, setSelected] = React.useState(feedback[0].id);
  const { catid, hours, minutes, seconds } = route.params;
  const [create] = useCreateActivityMutation();

  const [helviticaCondensed] = useFonts({
    "helvitica-condesed": require("../../assets/helvitica-condensed.otf"),
  });

  const saveActivity = () => {
    const data = {
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      category: catid,
      feedback: feedback.find((x) => x.id == selected),
    };
    create({
      variables: {
        feedback: data.feedback.name,
        category: data.category,
        calories: 0,
        duration: `${data.hours}:${data.minutes}:${data.seconds}`,
      },
    }).then((res) => {
      if (res.data.createActivity.status) {
        navigation.push("tabs");
      }
      console.log("Create Activity Result : ", res);
    });
    console.log("Activity Data => ", data);
  };

  if (!helviticaCondensed) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={styles.heading}>How Was It ?</Text>
        <View style={styles.info}>
          <Text style={styles.infoText}>Tennis for 1:02:00</Text>
          <View style={{ marginTop: 20 }}>
            <ExerciseFeedBack
              feedback={feedback}
              selected={selected}
              onSelect={(id: string) => setSelected(id)}
            />
          </View>
        </View>
        <Button txt={"SAVE IT"} clicked={() => saveActivity()} />
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
