import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NutrientItem } from "./Item";
import { Loading } from "../General";
import { useNutritionCategoryItemsQuery } from "../../generated/graphql";

interface Props {
  cat_id: string;
  select: (id: string, title: string, unit: string) => void;
  refreshing: boolean;
}

export const NutritionCategoryItems: React.FC<Props> = ({
  cat_id,
  select,
  refreshing,
}) => {
  const [selected, setSelected] = React.useState("");

  const { loading, data, error, refetch } = useNutritionCategoryItemsQuery({
    variables: {
      cat_id: cat_id,
    },
    onCompleted: (res) => {
      if (res.nutritionCategoryItems.length > 0) {
        const id = res.nutritionCategoryItems[0].code;
        handleSelect(id, res.nutritionCategoryItems[0].name, res.nutritionCategoryItems[0].unit);
      }
    },
  });

  React.useEffect(() => {
    if (refreshing) {
      refetch();
    }
  }, [refreshing]);

  const handleSelect = (id: string, title: string, unit: string) => {
    setSelected(id);
    select(id, title, unit);
  };

  if (loading || error) return <Loading />;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {data.nutritionCategoryItems.map((item, key) => (
          <View key={key} style={styles.item}>
            <NutrientItem
              clicked={() => handleSelect(item.code, item.name, item.unit)}
              recomended={item.recommended}
              title={item.name}
              unit={item.unit}
              value={item.intake}
              selected={selected === item.code}
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
