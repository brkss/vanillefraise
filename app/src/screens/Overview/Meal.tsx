import React from "react";
import { ScrollView, View, SafeAreaView, StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";
import { Loading, MealRecipes, MealGrocery } from "../../components";
import CalendarStrip from "react-native-calendar-strip";
import {
  useGetMealRecipesQuery,
  useDaysWithRecipesQuery,
} from "../../generated/graphql";

interface MarkedDate {
  count: number;
  date: string;
}

export const Meal: React.FC<any> = ({ route }) => {
  const { mealID, mealName } = route.params;
  const [markedDates, setMarkedDates] = React.useState<any[]>([]);
  const [date, setDate] = React.useState(new Date());
  const _daysWithMeals = useDaysWithRecipesQuery({
    variables: {
      mealID: mealID,
    },
    onCompleted: (res) => {
      if (res.daysWithRecipes.status) {
        setMarkedDates(generateMarkedDates(res.daysWithRecipes.markedDates));
      }
    },
  });
  const { data, loading, error, refetch } = useGetMealRecipesQuery({
    variables: {
      date: date.toString(),
      meal: mealID,
    },
  });
  const generateMarkedDates = (dates: MarkedDate[]) => {
    const markedDates: any[] = [];
    dates.map((date) => {
      markedDates.push({
        date: date.date,
        dots: [
          {
            color: "black",
            selectedColor: "white",
          },
        ],
      });
    });
    return markedDates;
  };

  const [helviticaCondensed] = useFonts({
    condensed: require("../../assets/helvitica-condensed.otf"),
  });

  if (!helviticaCondensed) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={styles.title}>{mealName}</Text>
        <View style={styles.row}>
          <Text style={styles.calories}>1100 Cal</Text>
          <Text style={styles.time}>⏱ 42min</Text>
        </View>
        {_daysWithMeals.loading || _daysWithMeals.error ? (
          <Loading />
        ) : (
          <CalendarStrip
            selectedDate={date}
            scrollable
            calendarAnimation={{ type: "sequence", duration: 30 }}
            daySelectionAnimation={{
              type: "background",
              duration: 300,
              highlightColor: "#9265DC",
            }}
            style={{ height: 90, paddingTop: 0, paddingBottom: 0 }}
            calendarHeaderStyle={{ color: "black" }}
            markedDates={markedDates}
            dateNumberStyle={{ color: "black" }}
            dateNameStyle={{ color: "black" }}
            iconContainer={{ flex: 0.1 }}
            highlightDateNameStyle={{ color: "white" }}
            highlightDateNumberStyle={{ color: "white" }}
            highlightDateContainerStyle={{ backgroundColor: "black" }}
            onDateSelected={(d) => {
              setDate(d.toDate());
              refetch({ date: date.toString(), meal: mealID });
            }}
            useIsoWeekday={false}
          />
        )}
        {loading || error ? (
          <Loading />
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            <MealRecipes recipes={data.getMealRecipes.recipes} />
            <MealGrocery ingredients={data.getMealRecipes.ingredients} />
          </ScrollView>
        )}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 7,
  },
  title: {
    fontFamily: "condensed",
    fontSize: 35,
    fontWeight: "bold",
    flexWrap: "wrap",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "baseline",
  },
  calories: {
    //lineHeight: 25,
    color: "#434343",
    fontSize: 25,
    fontFamily: "condensed",
    fontWeight: "bold",
    width: "50%",
  },
  time: {
    marginTop: -5,
    fontFamily: "condensed",
    fontSize: 24,
    textAlign: "right",
    width: "48%",
  },
});
