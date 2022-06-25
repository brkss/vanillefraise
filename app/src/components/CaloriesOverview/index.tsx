import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LoadingBar } from "./LoadingBar";
import {
  useCookedRecipesCountQuery,
  useGetUserBurnedCaloriesQuery,
  //useMeQuery,
  useMacrosQuery,
} from "../../generated/graphql";
//import { EnterDietButton, AddDietRecordButton } from "../General";
import { Loading } from "../General/Loading";
import { useUserCaloriesQuery } from "../../generated/graphql";
//import { calculateREE } from "../../utils/modules/macros/ree";
//import { getAge } from "../../utils/modules/bmr";

const calcProgress = (
  target: number,
  value: number,
  burned: number
): number => {
  if (value - burned >= target) return 100;
  return ((value - burned) * 100) / target;
};

interface Props {
  refreshing: boolean;
  dietPressed: () => void;
}

export const CaloriesOverview: React.FC<Props> = ({ refreshing }) => {
  const _macros = useMacrosQuery();
  const { data, loading, error, refetch } = useUserCaloriesQuery();
  const _burnedCalories = useGetUserBurnedCaloriesQuery();

  const _count = useCookedRecipesCountQuery();

  React.useEffect(() => {
    if (refreshing) {
      refetch();
      _count.refetch();
      _burnedCalories.refetch();
    }
  }, [refreshing]);

  if (
    _macros.loading ||
    _macros.error ||
    _count.loading ||
    _count.error ||
    _burnedCalories.loading ||
    _burnedCalories.error ||
    loading ||
    error ||
    !data.userCalories.status
  ) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.caloriesContainer}>
        <Text style={styles.takenCalories}>
          {data.userCalories.value - _burnedCalories.data.getUserBurnedCalories}
        </Text>
        <Text style={styles.needCalories}>
          / {_macros.data.macros.tdee || _macros.data.macros.ree}{" "}
          <Text style={styles.unit}>calories</Text>
        </Text>
      </View>
      <Text style={styles.metadata}> {data.userCalories.value} Cal Taken</Text>
      <Text style={styles.metadata}>
        -{_burnedCalories.data.getUserBurnedCalories} Cal Burned
      </Text>
      <LoadingBar
        progress={calcProgress(
          _macros.data.macros.tdee || _macros.data.macros.ree,
          data.userCalories.value,
          _burnedCalories.data.getUserBurnedCalories
        )}
      />
      <Text style={styles.recipeCooked}>
        You've cooked {_count.data.cookedRecipesCount} recipes.
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
    //alignItems: "baseline",
    width: "100%",
  },
  takenCalories: {
    fontSize: 55,
    fontWeight: "bold",
    fontFamily: "helvitica-condesed",
    marginBottom: -10,
    //backgroundColor: "pink",
    color: "#434343",
  },
  needCalories: {
    //backgroundColor: "pink",
    alignSelf: "flex-end",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "helvitica-condesed",
    color: "#434343",
  },
  unit: {
    marginTop: -10,
    fontSize: 20,
    lineHeight: 26,
    fontFamily: "helvitica-condesed",
    opacity: 0.7,
  },
  recipeCooked: {
    marginTop: -3,
    fontSize: 14,
    fontWeight: "400",
    color: "#434343",
  },
  metadata: {
    fontFamily: "helvitica-condesed",
    fontSize: 16,
    marginTop: -3,
    //lineHeight: 26,
    color: "#434343",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
