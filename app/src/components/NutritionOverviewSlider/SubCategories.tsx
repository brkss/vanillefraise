import React from "react";
import { ScrollView, Text, StyleSheet, View, Pressable } from "react-native";
import { Nutrition } from "../../generated/graphql";

interface Props {
  nutritions: Nutrition[];
  select: (id: string) => void;
}

export const NutritionSubCategories: React.FC<Props> = ({
  nutritions,
  select,
}) => {
  const [selected, setSelected] = React.useState(nutritions[0].code || "");

  React.useEffect(() => {
    setSelected( nutritions[0].code || "")
  }, [nutritions]);

  const handleSelect = (code: string) => {
    if (!code) return;
    setSelected(code);
    select(code);
  };

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={styles.container}
    >
      {nutritions.map((item, key) => (
        <Pressable
          onPress={() => handleSelect(item.code)}
          key={key}
          style={[
            styles.item,
            { backgroundColor: item.code === selected ? "#ffc4c4" : "#FAD6D6" },
          ]}
        >
          <Text style={styles.txt}>{item.name}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    //
  },
  txt: {
    fontSize: 12,
    fontWeight: "bold",
  },
  item: {
    paddingHorizontal: 17,
    paddingVertical: 10,
    backgroundColor: "#FAD6D6",
    marginRight: 7,
    borderRadius: 10,
  },
});
