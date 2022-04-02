import React from "react";
import { Pressable, Text, ScrollView, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const filters = [
  {
    name: "By Name",
    id: "BY_NAME",
  },
  {
    name: "By Ingredients",
    id: "BY_INGREDIENTS",
  },
  {
    name: "By Nutritients",
    id: "BY_NUTRITIENTS",
  },
];

interface Props {
  select: (selected: string) => void;
}

export const RecipeSearchSlider: React.FC<Props> = ({ select }) => {
  const [selected, setSelected] = React.useState("BY_NAME");

  const handleSelect = (f: string) => {
    setSelected(f);
    select(f);
  };

  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {filters.map((filter, key) => (
        <Pressable
          key={key}
          style={[
            styles.item,
            { backgroundColor: selected == filter.id ? colors.c1 : colors.c2 },
          ]}
          onPress={() => handleSelect(filter.id)}
        >
          <Text style={styles.txt}>{filter.name}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    marginVertical: 20,
  },
  item: {
    padding: 10,
    paddingHorizontal: 17,
    marginRight: 5,
    backgroundColor: colors.c2,
    borderRadius: 10,
  },
  txt: {
    fontWeight: "bold",
  },
});
