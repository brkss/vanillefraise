import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { NutrientItem } from "./Item";
import { useUserNutritionQuery } from "../../generated/graphql";
import { Loading } from "../General/Loading";
import dayjs from "dayjs";

interface Props {
  refreshing: boolean;
  clicked: (code: string, title: string) => void;
}

export const NutritionOverview: React.FC<Props> = ({ refreshing, clicked }) => {
  const { data, loading, error, refetch } = useUserNutritionQuery();
  React.useEffect(() => {
    if (refreshing) {
      refetch();
    }
  }, [refreshing]);

  if (loading || error) {
    if (error) console.log("Error accured on getting nutrients : ", error);
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About your nutrition</Text>
      <Text>{dayjs().format("DD/MM/YYYY")}</Text>
   		<View style={{height: 20}} />   
	  {data.userNutrition.data
        .sort((a, b) => b.nutritiens.length - a.nutritiens.length)
        .map((nutCat, key) => (
          <View key={key}>
            <Text style={styles.title}>{nutCat.name}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {nutCat.nutritiens
                .sort(({ quantity: a }, { quantity: b }) => b - a)
                .map((n, key) => (
                  <NutrientItem
                    key={key}
                    clicked={() => clicked(n.code, n.name)}
                    value={n.quantity}
                    unit={n.unit}
                    title={n.name}
                    recomended={n.recomendation}
                  />
                ))}
            </ScrollView>
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginBottom: 0,
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
    marginTop: 0,
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
  title: {
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
