import React from "react";
import { ScrollView, StyleSheet } from "react-native";
//import { ISlideCategory } from "../../utils/types";
import { Item } from "./Item";
//import { RecipeCategoriesQuery } from '../../generated/graphql';

interface Props {
  categories: any[];
  color: string;
  selected: string;
  onSelect: (id: string) => void;
}

export const Slider: React.FC<Props> = ({ categories, color, selected, onSelect }) => {
  return (
    <ScrollView
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      horizontal
    >
      {categories.map((cat, key) => (
        <Item onSelect={() => onSelect(cat.id)} key={key} color={color} name={cat.name} icon={cat.icon} selected={selected === cat.id} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 30,
  },
});
