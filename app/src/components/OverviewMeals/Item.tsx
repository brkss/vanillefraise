import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

interface Props {
  title: string;
  color: string;
  navigate: () => void;
  recipes: number;
}

export const MealItem: React.FC<Props> = ({
  color,
  title,
  navigate,
  recipes,
}) => {
  return (
    <Pressable
      onPress={() => navigate()}
      style={[styles.container, { backgroundColor: color }]}
    >
      <Text style={styles.recipes}>{recipes} recipes</Text>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    height: 70,
    justifyContent: "flex-end",
    borderWidth: 1,
    borderRadius: 11,
  },
  recipe: {
    fontSize: 11,
    fontWeight: "400",
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
  },
  recipes: {
    fontSize: 13,
    color: "#434343",
  },
});
