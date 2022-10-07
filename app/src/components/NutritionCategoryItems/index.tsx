import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NutrientItem } from "./Item";
import { Loading } from "../General";
import { useNutritionCategoryItemsQuery } from "../../generated/graphql";

interface Props {
  cat_id: string;
  select: (id: string) => void;
}

export const NutritionCategoryItems: React.FC<Props> = ({ cat_id, select }) => {
  const [selected, setSelected] = React.useState("");

  const { loading, data, error } = useNutritionCategoryItemsQuery({
    variables: {
      cat_id: cat_id,
    },
    onCompleted: (res) => {
      if (res.nutritionCategoryItems.length > 0) {
        const id = res.nutritionCategoryItems[0].id;
        handleSelect(id);
      }
    },
  });

  const handleSelect = (id: string) => {
    setSelected(id);
    select(id);
  };

  if (loading || error) return <Loading />;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {data.nutritionCategoryItems.map((item, key) => (
          <View key={key} style={styles.item}>
            <NutrientItem
              clicked={() => handleSelect(item.id)}
              recomended={item.recommended}
              title={item.name}
              unit={item.unit}
              value={item.intake}
              selected={selected === item.id}
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
