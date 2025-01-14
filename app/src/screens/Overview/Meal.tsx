import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  RefreshControl,
} from "react-native";
import {
  MarkAsFinished,
  Loading,
  MealRecipes,
  MealGrocery,
  SmoothLoading,
  NoSelectedRecipes,
  Button,
} from "../../components";
import CalendarStrip from "react-native-calendar-strip";
import {
  useGetMealRecipesQuery,
  useDaysWithRecipesQuery,
  useCookedRecipesMutation,
  UserCaloriesQuery,
  UserCaloriesDocument,
} from "../../generated/graphql";
import { SafeAreaView } from "react-native-safe-area-context";
import Moment from "moment";

interface MarkedDate {
  count: number;
  date: string;
}

const wait = (timeout: number) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export const Meal: React.FC<any> = ({ route, navigation }) => {
  //const [iscooked, setIscooked] = React.useState(false);
  const [cooked] = useCookedRecipesMutation();
  const { mealID, mealName } = route.params;
  const [markedDates, setMarkedDates] = React.useState<any[]>([]);
  const [date, setDate] = React.useState(new Date());
  const [isLoading, SetIsLoading] = React.useState(false);
  const [isCooked, setIsCooked] = React.useState<boolean>(false);
  const [refreshing, setRefreshing] = React.useState(false);

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
    fetchPolicy: "network-only",
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
    onCompleted: (res) => {
      //console.log("res => ", res.getMealRecipes.mealrecipes);
      if (res.getMealRecipes.cooked) setIsCooked(false);
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
    SetIsLoading(true);
    cooked({
      variables: {
        mealrecipesid: mr,
      },
      update: (store, { data }) => {
        if (!data.cookedRecipes.status) return;
        const caloriesData = store.readQuery<UserCaloriesQuery>({
          query: UserCaloriesDocument,
        }).userCalories;
        console.log(
          "UPADTE THAT SHIT !, calories => ",
          data.cookedRecipes.calories
        );
        store.writeQuery<UserCaloriesQuery>({
          query: UserCaloriesDocument,
          data: {
            userCalories: {
              value: caloriesData.value + data.cookedRecipes.calories,
              status: caloriesData.status,
              burnt: caloriesData.burnt,
              message: caloriesData.message,
              target: caloriesData.target,
              __typename: caloriesData.__typename,
            },
          },
        });
      },
    }).then((res) => {
      SetIsLoading(false);
      if (res.data.cookedRecipes.status) {
        setIsCooked(true);
      }
      console.log("cooked recipes result : ", res);
    });
    refetch();
    //console.log("meal recipes ids: ", mr);
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    refetch();
    wait(2000).then((_) => {
      setRefreshing(false);
    });
  }, []);

  return (
    <View style={styles.container}>
      {isLoading && <SmoothLoading text={"Marking.."} />}
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.row}>
          <Text style={[styles.title, { width: "50%" }]}>{mealName}</Text>
          <View style={[{ width: "50%", alignItems: "flex-end" }]}>
            {loading ||
            error ||
            data.getMealRecipes.mealrecipes.length === 0 ? null : (
              <MarkAsFinished
                //marked={isCooked}
                marked={data.getMealRecipes.cooked || isCooked}
                mark={() => markAsCooked()}
              />
            )}
          </View>
        </View>
        <View style={{ height: 10 }} />
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          style={{ flex: 1, marginBottom: 0 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.row}>
            <Text style={styles.calories}>
              {loading || error ? "-" : data.getMealRecipes.calories} Cal
            </Text>
            <Text style={styles.time}>
              ⏲ {loading || error ? "-" : data.getMealRecipes.time} min
            </Text>
          </View>
          <View
            style={{
              marginVertical: 20,
              borderTopColor: "#E5E2E2",
              borderTopWidth: 1,
            }}
          />

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
          ) : data.getMealRecipes.mealrecipes.length === 0 ? (
            <NoSelectedRecipes
              selectRecipes={() => navigation.navigate("Recipes")}
            />
          ) : (
            <>
              <MealRecipes
                mealids={data.getMealRecipes.mealrecipes || []}
                navigation={navigation}
                recipes={data.getMealRecipes.recipes}
                removedRecipe={() => refetch()}
              />
              <Button
                clicked={() =>
                  navigation.navigate("MealGrocery", {
                    ingredients: data.getMealRecipes.ingredients,
                    mealName: mealName,
                    date: Moment(date).format("DD/MM/YYYY"),
                  })
                }
                txt={"What do i need ?"}
              />
            </>
          )}
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
    fontFamily: "AvNextBold",
    fontSize: 30,
    fontWeight: "bold",
    flexWrap: "wrap",
    color: "#434343",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginTop: 10,
  },
  calories: {
    //lineHeight: 25,
    color: "#434343",
    fontSize: 20,
    fontFamily: "AvNextBold",
    fontWeight: "bold",
    width: "50%",
  },
  time: {
    marginTop: -5,
    fontFamily: "AvNextBold",
    fontSize: 20,
    textAlign: "right",
    width: "48%",
  },
});
