import React from "react";
import { ScrollView, View, SafeAreaView, StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";
import { Loading, MealRecipes, MealGrocery } from "../../components";
import CalendarStrip from "react-native-calendar-strip";
import { useMealRecipesQuery } from '../../generated/graphql';

export const Meal: React.FC<any> = ({route}) => {
  const { mealID } = route.params;
  const { data, loading, error } = useMealRecipesQuery({
    variables: {
      date: new Date(),
      meal: mealID 
    }
  });
  const [helviticaCondensed] = useFonts({
    condensed: require("../../assets/helvitica-condensed.otf"),
  });

  if (!helviticaCondensed || loading || error ) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={styles.title}>BREAKFAST</Text>
        <View style={styles.row}>
          <Text style={styles.calories}>1100 Cal</Text>
          <Text style={styles.time}>⏱ 42min</Text>
        </View>
        <CalendarStrip
          selectedDate={new Date()}
          scrollable
          calendarAnimation={{ type: "sequence", duration: 30 }}
          daySelectionAnimation={{
            type: "background",
            duration: 300,
            highlightColor: "#9265DC",
          }}
          style={{ height: 90, paddingTop: 0, paddingBottom: 0 }}
          calendarHeaderStyle={{ color: "black" }}
          //calendarColor={"#3343CE"}
          dateNumberStyle={{ color: "black" }}
          dateNameStyle={{ color: "black" }}
          iconContainer={{ flex: 0.1 }}
          highlightDateNameStyle={{ color: "white" }}
          highlightDateNumberStyle={{ color: "white" }}
          highlightDateContainerStyle={{ backgroundColor: "black" }}
          onDateSelected={(date) => {}}
          useIsoWeekday={false}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <MealRecipes />
          <MealGrocery />
        </ScrollView>
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
