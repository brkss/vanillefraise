import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LoadingBar } from "./LoadingBar";
import {
  useCookedRecipesCountQuery,
  useGetUserBurnedCaloriesQuery,
  useMeQuery,
} from "../../generated/graphql";
import { EnterDietButton, AddDietRecordButton } from "../General";
import { Loading } from "../General/Loading";
import { useUserCaloriesQuery } from "../../generated/graphql";
import { calculateREE } from "../../utils/modules/macros/ree";
import { getAge } from "../../utils/modules/bmr";

const calcProgress = (target: number, value: number): number => {
  if (value >= target) return 100;
  return (value * 100) / target;
};

interface Props {
  refreshing: boolean;
  dietPressed: () => void;
}

export const CaloriesOverview: React.FC<Props> = ({
  refreshing,
  dietPressed,
}) => {
  const [ree, setRee] = React.useState(0);
  const _me = useMeQuery({
    onCompleted: (res) => {
      if (res.me) {
        const me = res.me;
        const val = calculateREE(
          me.gender,
          me.weight,
          me.height,
          getAge(me.birth)
        );
        setRee(val);
      }
    },
  });
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
    _me.loading ||
    _me.error ||
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
      <View style={styles.row}>
        <View style={styles.caloriesContainer}>
          <Text style={styles.takenCalories}>
            {data.userCalories.value -
              _burnedCalories.data.getUserBurnedCalories}
          </Text>
          <Text style={styles.needCalories}>
            {" "}
            / {ree} <Text style={styles.unit}>calories</Text>
          </Text>
        </View>
        {/*<EnterDietButton pressed={() => dietPressed()} />
        <AddDietRecordButton pressed={() => dietPressed()} />*/}
      </View>
      {/*<Text style={styles.unit}>calories</Text>*/}
      <Text style={styles.burned}>{data.userCalories.value} Cal Taken</Text>
      <Text style={styles.burned}>
        -{_burnedCalories.data.getUserBurnedCalories} Cal Burned
      </Text>
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
    fontSize: 55,
    fontWeight: "bold",
    fontFamily: "helvitica-condesed",
  },
  needCalories: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "helvitica-condesed",
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
  burned: {
    fontFamily: "helvitica-condesed",
    fontSize: 18,
    marginTop: -3,
    //lineHeight: 26,
    color: "#434343",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
