import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import { Close, MealOptionsSelect, Button } from "../../components";
import {
  DaysWithRecipesDocument,
  DaysWithRecipesQuery,
  MealsDocument,
  MealsQuery,
  useAddMealRecipeMutation,
} from "../../generated/graphql";
import CalendarStrip from "react-native-calendar-strip";

export const MealsOptions: React.FC<any> = ({ route, navigation }) => {
  const [add] = useAddMealRecipeMutation();
  const [date, setDate] = React.useState<Date>(new Date());
  const [meal, setMeal] = React.useState("");
  const { recipe } = route.params;

  const save = () => {
    if (!recipe || !meal) {
      // error
      return;
    }
    add({
      variables: {
        meal: meal,
        recipe: recipe,
        date: date,
      },
      update: (store, { data }) => {
        if (!data || !data.addMealRecipe.status) {
          return;
        }

        if (date.toDateString() === new Date().toDateString()) {
          const oldMeals = store.readQuery<MealsQuery>({
            query: MealsDocument,
          })?.meals;
          let mls = [];
          let i = oldMeals.length - 1;
          while (i >= 0) {
            console.log("curr : ", oldMeals[i].id, " meal id : ", meal);
            if (oldMeals[i].id == meal) oldMeals[i].count += 1;
            mls.push(oldMeals[i]);
            i--;
          }
          console.log("UPDATE THAT SHIT!");
          store.writeQuery<MealsQuery>({
            query: MealsDocument,
            data: {
              meals: [...mls],
            },
          });
        }
      },
    })
      .then((res) => {
        if (res.data.addMealRecipe.status) {
          navigation.goBack();
        } else {
          console.log(
            res.data.addMealRecipe.message || "ERROR ADDING RECIPE TO MEAL"
          );
        }
      })
      .catch((e) => {
        console.log("Something went wrong adding recipe to meal => ", e);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.incube}>
        <SafeAreaView>
          <Text style={styles.heading}>Meals</Text>
          <Close isMealOption={true} pressed={() => navigation.goBack()} />
          <View>
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
              //calendarColor={"#3343CE"}
              dateNumberStyle={{ color: "black" }}
              dateNameStyle={{ color: "black" }}
              iconContainer={{ flex: 0.1 }}
              highlightDateNameStyle={{ color: "white" }}
              highlightDateNumberStyle={{ color: "yellow" }}
              highlightDateContainerStyle={{ backgroundColor: "black" }}
              onDateSelected={(date) => setDate(date.toDate())}
              useIsoWeekday={false}
            />
            <MealOptionsSelect select={(id) => setMeal(id)} />
            <Button clicked={() => save()} txt={"Save"} />
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //opacity: 0,
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  incube: {
    height: "70%",
    width: "100%",
    padding: 15,
    backgroundColor: "white",
    borderRadius: 20,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 33,
    lineHeight: 37,
    color: "#3C3C3D",
  },
});
