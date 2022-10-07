import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Item } from "./Item";
import { useNutritionCategoryIntakeQuery } from "../../generated/graphql";
import { Loading } from "../General";

interface Props {
  navigation: any;
}

export const NutritionIntakeDaily: React.FC<Props> = ({ navigation }) => {
  const { data, loading, error } = useNutritionCategoryIntakeQuery();

  if (loading || error) return <Loading />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Nutrition</Text>
      {data.nutritionCategoryIntake.categories.map((item, key) => (
        <Item
          key={key}
          clicked={() => navigation.navigate("NutritionOverview", {cat_id: item.id, cat_name: item.name})}
          status={"everything's good"}
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
    marginBottom: 20,
  },
});
