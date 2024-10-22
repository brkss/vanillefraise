import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { GroceryItem } from "./Item";

interface Props {
  ingredients: any[];
}

export const MealGrocery: React.FC<Props> = ({ ingredients }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What you'll need :</Text>
      <View style={styles.items}>
        {ingredients.map((ing, key) =>
          ing.ingredients ? (
            <GroceryItem
              unit={ing.unit}
              qtt={ing.amount}
              key={key}
              txt={ing.ingredients}
            />
          ) : null
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    fontFamily: "AvNextBold",
    color: "#434343",
  },
  items: {
    marginTop: 10,
  },
});
