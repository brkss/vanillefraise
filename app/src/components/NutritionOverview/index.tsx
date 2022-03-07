import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NutrientItem } from "./Item";
import { useUserNutritionQuery } from "../../generated/graphql";
import { Loading } from "../General/Loading";

const nutrients = [
  {
    title: "Vitamin E (alpha-tocopherol)",
    unit: "mg",
    value: 402,
  },
  {
    title: "Vitamin D (D2 + D3)",
    unit: "µg",
    value: 30,
  },
  {
    title: "Carbohydrate, by difference",
    unit: "g",
    value: 600,
  },
  {
    title: "Zinc, Zn",
    unit: "mg",
    value: 50,
  },
];

export const NutritionOverview: React.FC = () => {
  const { data, loading, error } = useUserNutritionQuery();

  if (loading || error) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About your nutrition</Text>
      <Text>Last 10 Days</Text>
      <Text style={styles.info}>
        nutrition counted here is sum of nutrition related to recipes you cooked
        in recipes section.
      </Text>
      <View style={styles.row}>
        {data.userNutrition.data.sort(({quantity: a}, {quantity: b}) => b - a).map((n, key) => (
          <View style={styles.item} key={key}>
            <NutrientItem value={n.quantity} unit={n.unit} title={n.name} recomended={n.recomendation} />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
  },
  info: {
    fontSize: 13,
    fontWeight: "400",
    color: "#434343",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    //alignItems: "baseline",
    flexWrap: "wrap",
  },
  item: {
    width: "50%",
    padding: 5,
    height: 120,
  },
});
