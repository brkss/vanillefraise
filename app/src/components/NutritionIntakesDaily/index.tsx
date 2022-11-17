import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Item } from "./Item";
import { useNutritionCategoryIntakeQuery } from "../../generated/graphql";
import { Loading } from "../General";

interface Props {
  navigation: any;
  refreshing: boolean;
}

const GET_STATUS = (intake: number) => {
  if (intake == 0) {
    return "0 intake, find recipes to cook";
  } else if (intake > 0 && intake <= 90) {
    return `${
      100 - Math.floor(intake)
    }% to Finish your daily recommended intake !`;
  } else {
    return "Well Done !";
  }
};

export const NutritionIntakeDaily: React.FC<Props> = ({
  navigation,
  refreshing,
}) => {
  const { data, loading, error, refetch } = useNutritionCategoryIntakeQuery();

  React.useEffect(() => {
    if (refreshing) {
      refetch();
    }
  }, [refreshing]);

  if (loading || error) return <Loading />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Daily Nutrition Intake </Text>
      {data.nutritionCategoryIntake.categories.map((item, key) => (
        <Item
          key={key}
          clicked={() =>
            navigation.navigate("NutritionOverview", {
              cat_id: item.id,
              cat_name: item.name,
            })
          }
          status={GET_STATUS(item.intake)}
          title={item.name}
          value={Math.floor(item.intake)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //padding: 10,
  },
  title: {
    fontFamily: "AvNextBold",
    fontSize: 20,
    fontWeight: "bold",
    color: "#434343",
    marginBottom: 10,
  },
});
