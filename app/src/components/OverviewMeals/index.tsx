import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MealItem } from "./Item";

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

export const MealsOverview: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {meals.map((meal, key) => (
          <View style={styles.item}>
            <MealItem color={meal.color} navigate={() => navigation.push('Meal')} title={meal.title} />
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
