import React from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { Heading, Slider, RecipeThumbnail } from "../../components";
import { recipes, recipes_category } from "../../utils";

export const Recipes: React.FC<any> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headingContainer}>
          <Heading title={"Recipes"} />
        </View>
        <View style={styles.recipesContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Slider color={"#C8F6FC"} categories={recipes_category} />
            {recipes.map((recipe, key) => (
              <RecipeThumbnail
                pressed={() => navigation.push("RecipeDetails")}
                title={recipe.title}
                img={recipe.img}
                time={recipe.time}
                carbs={recipe.carbs}
                key={key}
              />
            ))}
            <View style={{ height: 200 }} />
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingBottom: 0,
  },
  headingContainer: {
    //flex: 0.14,
  },
  recipesContainer: {
    //flex: 0.86,
  },
});
