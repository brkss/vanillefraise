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

export const RecipeSearchSlider: React.FC<Props> = ({select}) => {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {filters.map((filter, key) => (
        <Pressable key={key} style={styles.item} onPress={() => select(filter.id)}>
          <Text style={styles.txt}>{filter.name}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    marginVertical: 10,
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
