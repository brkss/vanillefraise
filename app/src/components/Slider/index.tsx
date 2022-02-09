import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ISlideCategory } from "../../utils/types";
import { Item } from "./Item";

interface Props {
  categories: ISlideCategory[];
  color: string;
}

export const Slider: React.FC<Props> = ({ categories, color }) => {
  return (
    <ScrollView
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      horizontal
    >
      {categories.map((cat, key) => (
        <Item key={key} color={color} name={cat.name} icon={cat.icon} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
});
