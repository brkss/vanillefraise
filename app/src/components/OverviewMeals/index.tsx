import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MealItem } from "./Item";
import { useMealsQuery } from "../../generated/graphql";
import { Loading } from "../General/Loading";

interface Props {
  navigation: any;
  refreshing: boolean;
}

const meals = [
  {
    title: "BREAKFAST",
    color: "#262626",
    //color: "#B3DFCE",
  },
  {
    title: "LUNCH",
    color: "#262626",
    //color: "#BCF3DF",
  },
  {
    title: "DINNER",
    color: "#262626",
    //color: "#C5F6E4",
  },
];

export const MealsOverview: React.FC<Props> = ({ navigation, refreshing }) => {
  const { data, loading, error, refetch } = useMealsQuery();

  React.useEffect(() => {
    if (refreshing) {
      refetch();
    }
  }, [refreshing]);

  if (loading || error) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Meals</Text>
      <View style={styles.row}>
        {data.meals
          .sort((a, b) => a.index - b.index)
          .map((meal, key) => (
            <View key={key} style={styles.item}>
              <MealItem
                index={key}
                color={meals[key].color}
                recipes={meal.count}
                navigate={() =>
                  navigation.push("Meal", {
                    mealID: meal.id,
                    mealName: meal.name,
                  })
                }
                title={meal.name}
              />
            </View>
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    marginBottom: 10,
  },
  title: {
    fontFamily: "AvNextBold",
    fontWeight: "bold",
    color: "#434343",
    fontSize: 17,
    marginBottom: 5,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    padding: 2,
    paddingBottom: 10,
    width: "33%",
  },
});
