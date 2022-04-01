import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RecipeThumbnail } from "../../RecipeThumbnail";
import { CDN } from '../../../utils/config/defaults';

interface Props {
  recipes: any[]
}

export const MealRecipes: React.FC<Props> = ({recipes}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipes</Text>
      <Text style={styles.date}>28/03/2022</Text>
      <View style={styles.recipes}>
        {
          recipes.map((recipe, key) => (
            <RecipeThumbnail
                pressed={() => {}}
                title={recipe.name}
                img={`${CDN}/${recipe.image}`}
                time={recipe.total}
                carbs={recipe.carbs}
                key={key}
              />
          ))
        }
        
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
