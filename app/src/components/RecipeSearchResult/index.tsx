import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RecipeThumbnail } from "../RecipeThumbnail";
import { useSearchRecipesQuery } from "../../generated/graphql";
import { Loading } from "../General/Loading";
import { CDN } from "../../utils/config/defaults";
import { RecipeSearchSlider } from "./Slider";

interface Props {
  query: string;
  navigation: any;
}

export const RecipeSearchResult: React.FC<Props> = ({ query, navigation }) => {
  const [filter, setFilter] = React.useState("BY_NAME");
  const { data, loading, error } = useSearchRecipesQuery({
    variables: {
      query: query,
    },
  });

  if (loading || error) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <RecipeSearchSlider
        select={(f) => {
          setFilter(f);
          console.log("filter : ", filter);
        }}
      />

      {
        {
          BY_NAME:
            data.searchRecipes.recipes.length == 0 ? (
              <Text>No Result</Text>
            ) : (
              data.searchRecipes.recipes.map((recipe, key) => (
                <RecipeThumbnail
                  time={recipe.total}
                  title={recipe.name}
                  key={key}
                  pressed={() =>
                    navigation.push("RecipeDetails", { id: recipe.id })
                  }
                  img={`${CDN}/${recipe.image}`}
                />
              ))
            ),
          BY_INGREDIENTS:
            data.searchRecipes.ingredients.length == 0 ? (
              <Text>No Result</Text>
            ) : (
              data.searchRecipes.ingredients.map((ing, key) => (
                <RecipeThumbnail
                  time={ing.recipe.total}
                  title={ing.recipe.name}
                  key={key}
                  pressed={() =>
                    navigation.push("RecipeDetails", { id: ing.recipe.id })
                  }
                  img={`${CDN}/${ing.recipe.image}`}
                />
              ))
            ),
          BY_NUTRITIENTS:
            data.searchRecipes.nutritients.length == 0 ? (
              <Text>No Result</Text>
            ) : (
              data.searchRecipes.nutritients.map((nut, key) => (
                <RecipeThumbnail
                  time={nut.recipe.total}
                  title={nut.recipe.name}
                  key={key}
                  pressed={() =>
                    navigation.push("RecipeDetails", { id: nut.recipe.id })
                  }
                  img={`${CDN}/${nut.recipe.image}`}
                />
              ))
            ),
        }[filter]
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  txt: {},
});
