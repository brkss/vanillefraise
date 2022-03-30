import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MealItem } from "./Item";
import { useMealsQuery } from "../../generated/graphql";
import { Loading } from "../General/Loading";

interface Props {
  navigation: any;
}

const meals = [
  {
    title: "BREAKFAST",
    color: "#C3C3C3",
  },
  {
    title: "LUNCH",
    color: "#D2D2D2",
  },
  {
    title: "DINNER",
    color: "#E2E2E2",
  },
];

export const MealsOverview: React.FC<Props> = ({ navigation }) => {
  const { data, loading, error } = useMealsQuery();

  if (loading || error) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {data.meals.map((meal, key) => (
          <View key={key} style={styles.item}>
            <MealItem
              color={meals[key].color}
              navigate={() => navigation.push("Meal")}
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
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    //padding: 5,
    paddingBottom: 10,
    width: "100%",
  },
});
