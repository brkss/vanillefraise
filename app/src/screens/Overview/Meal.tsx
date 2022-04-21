import React from "react";
import { ScrollView, View, SafeAreaView, StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";
import {
  MarkAsFinished,
  Loading,
  MealRecipes,
  MealGrocery,
} from "../../components";
import CalendarStrip from "react-native-calendar-strip";
import {
  useGetMealRecipesQuery,
  useDaysWithRecipesQuery,
  useCookedRecipesMutation,
} from "../../generated/graphql";

interface MarkedDate {
  count: number;
  date: string;
}

export const Meal: React.FC<any> = ({ route, navigation }) => {
  const [iscooked, setIscooked] = React.useState(false);
  const [cooked] = useCookedRecipesMutation();
  const { mealID, mealName } = route.params;
  const [markedDates, setMarkedDates] = React.useState<any[]>([]);
  const [date, setDate] = React.useState(new Date());

  const getMealRecipesIds = (): string[] => {
    let mr: string[] = [];
    data.getMealRecipes.mealrecipes.forEach((r) => {
      mr.push(r.id);
    });

    return mr;
  };

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

  const markAsCooked = () => {
    const mr = getMealRecipesIds();
    cooked({
      variables: {
        mealrecipesid: mr,
      },
    }).then((res) => {
      console.log("cooked recipes result : ", res);
    });
    refetch();
    //console.log("meal recipes ids: ", mr);
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
        <View style={styles.row}>
          <Text style={[styles.title, { width: "50%" }]}>{mealName}</Text>
          <View style={[{ width: "50%", alignItems: "flex-end" }]}>
            {loading || error ? null : (
              <MarkAsFinished
                marked={data.getMealRecipes.cooked}
                mark={() => markAsCooked()}
              />
            )}
          </View>
        </View>
        <View style={styles.row}>
          <Text style={styles.calories}>
            {" "}
            {loading || error ? "__" : data.getMealRecipes.calories} Cal
          </Text>
          <Text style={styles.time}>
            {" "}
            ⏱ {loading || error ? "__" : data.getMealRecipes.time} min
          </Text>
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
            <MealRecipes
              mealids={data.getMealRecipes.mealrecipes} 
              navigation={navigation}
              recipes={data.getMealRecipes.recipes}
            />
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
    alignItems: "center",
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
