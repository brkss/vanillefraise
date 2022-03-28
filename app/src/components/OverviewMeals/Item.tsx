import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

interface Props {
  title: string;
  color: string;
  navigate: () => void;
}

export const MealItem: React.FC<Props> = ({color, title, navigate}) => {
  return (
    <Pressable onPress={() => navigate()} style={[styles.container, {backgroundColor: color}]}>
      <Text style={styles.recipe}>2 Recipes</Text>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    height: 70,
    justifyContent: 'flex-end',
    borderRadius: 11
  },
  recipe: {
    fontSize: 11,
    fontWeight: "400",
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
  },
});
