import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { IngredientItem } from "./Item";

interface Props {
  ingredients: string[];
}

export const Ingredients: React.FC<Props> = ({ ingredients }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingredients</Text>
      {ingredients.map((ing, key) => (
        <IngredientItem key={key} txt={ing} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
  title: {
    fontSize: 25,
    marginBottom: 15,
    fontWeight: "bold",
  },
});
