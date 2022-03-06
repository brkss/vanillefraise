import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LoadingBar } from './LoadingBar';
import { useCookedRecipesCountQuery } from '../../generated/graphql';
import { Loading } from '../General/Loading';

export const CaloriesOverview: React.FC = () => {

  const _count = useCookedRecipesCountQuery();

  if(_count.loading || _count.error){
    return <Loading />
  }

  return (
    <View style={styles.container}>
      <View style={styles.caloriesContainer}>
        <Text style={styles.takenCalories}>1402</Text>
        <Text style={styles.needCalories}> / 2400</Text>
      </View>
      <Text style={styles.unit}>calories</Text>
      <LoadingBar />
      <Text style={styles.recipeCooked}>You cooked  {_count.data.cookedRecipesCount} recipes.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  },
  caloriesContainer: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  takenCalories: {
    fontSize: 60,
    fontWeight: "bold",
    fontFamily: "helvitica-condesed",
  },
  needCalories: {
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "helvitica-condesed",
  },
  unit: {
    marginTop: -10,
    fontSize: 26,
    fontFamily: "helvitica-condesed",
    opacity: 0.7,
  },
  recipeCooked: {
    fontSize: 18,
    fontWeight: "400",
    color: "#434343",
  },
});
