import React from "react";
import { ScrollView, Text, StyleSheet, View, Pressable } from "react-native";
interface Props {
  categories: any[];
  select: (id: string) => void;
}

export const NutritionCategories: React.FC<Props> = ({
  categories,
  select,
}) => {
  const [selected, setSelected] = React.useState<string>("");

  const handleSelect = (id: string) => {
    setSelected(id);
    select(id);
  };

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      horizontal
    >
      {categories.map((item, key) => (
        <Pressable
          onPress={() => handleSelect(item.id)}
          key={key}
          style={[
            styles.item,
            { backgroundColor: selected === item.id ? "#ffc4c4" : "#FAD6D6" },
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
    marginBottom: 10,
  },
  txt: {
    fontSize: 13,
    fontWeight: "bold",
  },
  item: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    backgroundColor: "#FAD6D6",
    marginRight: 7,
    borderRadius: 10,
  },
});
