import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NutrientItem } from "./Item";
import { Loading } from '../General';
import { useNutritionCategoryItemsQuery } from '../../generated/graphql'; 

interface Props {
  cat_id: string;
}

export const NutritionCategoryItems: React.FC<Props> = ({cat_id}) => {

  const { loading, data, error } = useNutritionCategoryItemsQuery({
    variables: {
      cat_id: cat_id
    }
  });

  if(loading || error) return <Loading />

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {data.nutritionCategoryItems.map((item, key) => (
          <View key={key} style={styles.item}>
            <NutrientItem
              clicked={() => {}}
              recomended={item.recommended}
              title={item.name}
              unit={item.unit}
              value={item.intake}
              selected={key === 0}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  item: {
    width: "50%",
  },
});
