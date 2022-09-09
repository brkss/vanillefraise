import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NutritionCategories } from "./Categories";
import { NutritionSubCategories } from "./SubCategories";
import { useNutritionsQuery, Nutrition } from "../../generated/graphql";
import { Loading } from "../../components/General";

interface Props {
  select: (code: string) => void;
}

export const NutritionOverviewSlider: React.FC<Props> = ({select}) => {
  const [selected, setSelected] = React.useState<Nutrition[] | null>(null);
  const { data, loading, error } = useNutritionsQuery({
    onCompleted: (res) => {
      if (res.nutritions[0]) {
        setSelected(res.nutritions[0].nutrients as any);
      }
    },
  });

  const handleSelectCategory = (id: string) => {
    const category = data.nutritions.find((x) => x.id === id);
    if (!category) return;
    setSelected(category.nutrients as any);
  };

  const handleSelectSubCategory = (code: string) => {
    select(code);
  }

  if (loading || error) return <Loading />;

  return (
    <View style={styles.container}>
      <NutritionCategories
        select={(id) => handleSelectCategory(id)}
        categories={data.nutritions}
      />
        {selected && <NutritionSubCategories select={(code) => handleSelectSubCategory(code)} nutritions={selected} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});
