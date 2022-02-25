import React from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { Heading, Slider, RecipeThumbnail, Loading } from "../../components";
import { recipes, recipes_category } from "../../utils";
import { colors } from "../../utils";
import { useRecipeCategoriesQuery } from '../../generated/graphql';

export const Recipes: React.FC<any> = ({ navigation }) => {

  const [category, SetCategory] = React.useState('');
  const { data, loading, error } = useRecipeCategoriesQuery({fetchPolicy: 'cache-first', onCompleted: (data => {
    if(data.recipeCategories){
      SetCategory(data.recipeCategories[0].id);
    }
  })});
  
  if(loading || error){
    return <Loading />
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headingContainer}>
          <Heading title={"Recipes"} />
        </View>
        <View style={styles.recipesContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Slider color={colors.c3} selected={category} onSelect={(category: string) => SetCategory(category)} categories={ data!.recipeCategories as any } />
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
