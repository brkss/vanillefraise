import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NutrientItem } from "./Item";
import { useUserNutritionQuery } from "../../generated/graphql";
import { Loading } from "../General/Loading";
import dayjs from "dayjs";

interface Props {
  refreshing: boolean;
}

export const NutritionOverview: React.FC<Props> = ({ refreshing }) => {
  const { data, loading, error, refetch } = useUserNutritionQuery();
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
      <Text style={styles.heading}>About your nutrition</Text>
      <Text>{dayjs().format("DD/MM/YYYY")}</Text>
      <Text style={styles.info}>
        nutrition counted here is sum of nutrition related to recipes you cooked
        in recipes section.
      </Text>
      <View style={styles.row}>
        {data.userNutrition.data
          .sort(({ quantity: a }, { quantity: b }) => b - a)
          .map((n, key) => (
            <View style={styles.item} key={key}>
              <NutrientItem
                value={n.quantity}
                unit={n.unit}
                title={n.name}
                recomended={n.recomendation}
              />
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
