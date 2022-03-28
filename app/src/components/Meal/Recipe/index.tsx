import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RecipeThumbnail } from "../../RecipeThumbnail";

export const MealRecipes: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipes</Text>
      <Text style={styles.date}>28/03/2022</Text>
      <View style={styles.recipes}>
        <RecipeThumbnail
          title={"Chickpea Salad Sandwich"}
          img={
            "https://images.101cookbooks.com/CHICKPEA-SALAD-SANDWICH-RECIPE-h.jpg?w=680&auto=format"
          }
          time={"20"}
          pressed={() => {}}
        />
        <RecipeThumbnail
          title={"Chickpea Salad Sandwich"}
          img={
            "https://images.101cookbooks.com/toasted-coconut-milk.jpg?w=680&auto=format"
          }
          time={"20"}
          pressed={() => {}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    marginTop: 20,
  },
  recipes: {
    marginTop: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 34,
    fontFamily: "condensed",
    color: "#434343",
  },
  date: {
    lineHeight: 25,
    fontSize: 18,
    fontWeight: "600",
    color: "#434343",
    //fontFamily: "condensed",
  },
});
