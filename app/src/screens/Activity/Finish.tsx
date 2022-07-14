import React from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import { useFonts } from "expo-font";
import {
  ExerciseFeedBack,
  Button,
  Loading,
  ActivityTime,
} from "../../components";
import {
  ActivitiesBurnedCaloriesDataDocument,
  ActivitiesBurnedCaloriesDataQuery,
  GetUserBurnedCaloriesDocument,
  GetUserBurnedCaloriesQuery,
  useCreateActivityMutation,
  UserCaloriesDocument,
  UserCaloriesQuery,
} from "../../generated/graphql";
import dayjs from "dayjs";

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
  const { category, name } = route.params;
  const [create] = useCreateActivityMutation();
  const [minutes, setMinutes] = React.useState(0);
  const [hours, setHours] = React.useState(1);

  const [helviticaCondensed] = useFonts({
    "helvitica-condesed": require("../../assets/helvitica-condensed.otf"),
  });

  const saveActivity = () => {
    const data = {
      hours: hours,
      minutes: minutes,
      seconds: 0,
      category: category,
      feedback: feedback.find((x) => x.id == selected),
    };
    create({
      variables: {
        feedback: data.feedback.name,
        category: data.category,
        calories: 0,
        duration: `${data.hours}:${data.minutes}:${data.seconds}`,
      },
      update: (store, { data }) => {
        if (!data || !data.createActivity.status) return;
        const burnedCaloriesData =
          store.readQuery<ActivitiesBurnedCaloriesDataQuery>({
            query: ActivitiesBurnedCaloriesDataDocument,
          }).activitiesBurnedCaloriesData;
        const index = burnedCaloriesData.findIndex(
          (d) => dayjs(d.date).diff(dayjs(), "d") === 0
        );
        if (index > -1) {
          burnedCaloriesData[index].count += data.createActivity.burnedCalories;
        } else if (index === -1) {
          burnedCaloriesData.push(
            Object.assign(
              {},
              {
                count: data.createActivity.burnedCalories || 0,
                date: new Date(),
              }
            )
          );
        }
        const caloriesData = store.readQuery<GetUserBurnedCaloriesQuery>({
          query: GetUserBurnedCaloriesDocument,
        }).getUserBurnedCalories;
        console.log("UPDATE THAT SHIT !");
        store.writeQuery<ActivitiesBurnedCaloriesDataQuery>({
          query: ActivitiesBurnedCaloriesDataDocument,
          data: {
            activitiesBurnedCaloriesData: [...burnedCaloriesData],
          },
        });
        store.writeQuery<GetUserBurnedCaloriesQuery>({
          query: GetUserBurnedCaloriesDocument,
          data: {
            getUserBurnedCalories:
              caloriesData + data.createActivity.burnedCalories,
          },
        });
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
        <View style={styles.info}>
          <Text style={styles.infoText}>How was {name} ?</Text>
          <Text style={styles.hint}>
            one press to increment time, long press to decrement !
          </Text>
          <View style={styles.timeContainer}>
            <ActivityTime
              changeHours={(val: number) => setHours(val)}
              changeMinutes={(val: number) => setMinutes(val)}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <ExerciseFeedBack
              feedback={feedback}
              selected={selected}
              onSelect={(id: string) => setSelected(id)}
            />
          </View>
        </View>
        <Button txt={"SAVE IT!"} clicked={() => saveActivity()} />
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
  timeContainer: {
    padding: 0,
  },
  hint: {
    fontSize: 12,
    fontWeight: "300",
    opacity: 0.7,
    textAlign: "center",
    marginTop: 10,
  },
});
