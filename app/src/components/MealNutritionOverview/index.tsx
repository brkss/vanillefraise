import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Item } from "./Item";
import { useMealNutritionQuery } from "../../generated/graphql";
import { Loading } from "../../components";
import { Info } from "./Info";

interface Props {
  meal: string;
  date: Date;
}

export const MealNutritionOverview: React.FC<Props> = ({ date, meal }) => {
  const { loading, data, error } = useMealNutritionQuery({
    variables: {
      date: date,
      meal: meal,
    },
    /// DEBUG
    onCompleted: (res) => {
      console.log("res n => ", res.mealNutrition.nutrition);
    },
  });

  if (loading || error) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nutrition Overview</Text>
      {data.mealNutrition.nutrition.length == 0 ? <Info /> : null}
      <View style={styles.row}>
        {data.mealNutrition.nutrition.map((n, key) => (
          <View key={key} style={styles.item}>
            <Item label={n.label} quantity={n.quantity} />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // padd
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  barContainer: {
    paddingVertical: 10,
    flexDirection: "row",
    //fontSize: 10,
  },
  bar: {
    height: 20,
    backgroundColor: "blue",
    width: "10%",
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    width: "50%",
  },
});
