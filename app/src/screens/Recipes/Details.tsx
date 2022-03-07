import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import {
  Close,
  Ingredients,
  Instructions,
  RecipeMetaData,
  Button,
  Loading,
  Info,
  RecipeNutrition,
} from "../../components";
import { useRecipeQuery, useRecipeEnergyQuery } from "../../generated/graphql";
import { CDN } from "../../utils/config/defaults";

export const RecipeDetails: React.FC<any> = ({ route, navigation }) => {
  
  const { id } = route.params;
  const _energy = useRecipeEnergyQuery({
    variables: {
      recipe_id: id
    }
  })
  const { data, loading, error } = useRecipeQuery({
    fetchPolicy: "cache-first",
    variables: {
      id: id,
    },
  });

  if (loading || error || !data || _energy.loading || _energy.error || !data.recipe.status) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <ImageBackground
          style={styles.image}
          source={{
            uri: `${CDN}/${data.recipe.recipe!.image}`,
          }}
        >
          <Info txt={`${_energy.data.recipeEnergy} Kcal`} clicked={() => navigation.push("RecipeNutrition")} />
          <Close pressed={() => navigation.popToTop()} />
        </ImageBackground>
        <View style={styles.content}>
          <RecipeMetaData
            title={data.recipe.recipe!.name}
            description={data.recipe.recipe!.description || undefined}
            prep={data.recipe.recipe?.prep || undefined}
            cook={data.recipe.recipe?.cook || undefined}
            total={data.recipe.recipe?.total || undefined}
          />
          <RecipeNutrition recipeId={id} />
          <Ingredients ingredients={data.recipe.recipe!.ingredients} />
          <Instructions
            instructions={data.recipe.recipe!.instructions.sort(
              ({ index: a }, { index: b }) =>  a - b 
            )}
          />
          <Button
            //color={"#2A2A2A"}
            //bg={"#B6DA81"}
            txt={"Start Cooking"}
            clicked={() =>
              navigation.push("Cooking", {
                id: data.recipe.recipe!.id,
              })
            }
          />
          <View style={{ height: 50 }} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 300,
    width: "100%",
  },
  content: {
    padding: 10,
  },
});
