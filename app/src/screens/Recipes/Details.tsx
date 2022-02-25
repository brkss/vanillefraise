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
} from "../../components";
import { useRecipeQuery } from "../../generated/graphql";
import { CDN } from "../../utils/config/defaults";

const ings = [
  "nonstick cooking spray",
  "5 (6 ounce) pork chops",
  "1 pinch garlic salt, or to taste",
  "1 (18.5 ounce) can French onion soup (such as Progresso®)",
  "1 (8 ounce) container light sour cream",
  "2 tablespoons all-purpose flour",
];

export const RecipeDetails: React.FC<any> = ({ route, navigation }) => {
  const { id } = route.params;
  const { data, loading, error } = useRecipeQuery({
    fetchPolicy: "cache-first",
    variables: {
      id: id,
    },
  });

  if (loading || error || !data || !data.recipe.status) {
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
          <Ingredients ingredients={data.recipe.recipe!.ingredients} />
          <Instructions instructions={data.recipe.recipe!.instructions} />
          <Button
            //color={"#2A2A2A"}
            //bg={"#B6DA81"}
            txt={"Start Cooking"}
            clicked={() => navigation.push("Cooking", {
              id: data.recipe.recipe!.id
            })}
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
