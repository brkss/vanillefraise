import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LoadingBar } from "./LoadingBar";
import { useCookedRecipesCountQuery } from "../../generated/graphql";
import { Loading } from "../General/Loading";
import { useUserCaloriesQuery } from "../../generated/graphql";

const calcProgress = (target: number, value: number): number => {
  if (value >= target) return 100;
  return (value * 100) / target;
};

interface Props {
  refreshing: boolean;
}

export const CaloriesOverview: React.FC<Props> = ({refreshing}) => {
  const { data, loading, error, refetch } = useUserCaloriesQuery();
  const _count = useCookedRecipesCountQuery();

  React.useEffect(() => {
    if(refreshing){
      refetch();
    }
  })

  if (
    _count.loading ||
    _count.error ||
    loading ||
    error ||
    !data.userCalories.status
  ) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.caloriesContainer}>
        <Text style={styles.takenCalories}>{data.userCalories.value}</Text>
        <Text style={styles.needCalories}> / {data.userCalories.target}</Text>
      </View>
      <Text style={styles.unit}>calories</Text>
      <Text style={styles.burned}>1200 Cal Burned</Text>
      <LoadingBar
        progress={calcProgress(
          data.userCalories.target,
          data.userCalories.value
        )}
      />
      <Text style={styles.recipeCooked}>
        You cooked {_count.data.cookedRecipesCount} recipes.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
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
  burned: {
    fontFamily: "helvitica-condesed",
    fontSize: 25,
    color: "#434343",
  },
});
