import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import {
  NutritionIntakeChart,
  NutritionCategoryItems,
  Loading,
} from "../../components";
import { useNutritionCategoryItemsQuery } from "../../generated/graphql";

export const NutritionOverview: React.FC<any> = ({ route }) => {
  const { cat_id, cat_name } = route.params;
  const [selected, setSelected] = React.useState("");

  const handleSelect = (id: string) => {
    setSelected(id);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={styles.title}>{cat_name}</Text>
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
          {selected.length > 0 && <NutritionIntakeChart code={selected} />}
          <NutritionCategoryItems
            select={(id) => handleSelect(id)}
            cat_id={cat_id}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontFamily: "AvNextBold",
    fontSize: 30,
    fontWeight: "bold",
  },
});
