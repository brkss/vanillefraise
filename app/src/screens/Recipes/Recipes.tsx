import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  RefreshControl,
} from "react-native";
import {
  Heading,
  Slider,
  RecipeThumbnail,
  Loading,
  SearchInput,
  RecipeSearchResult,
} from "../../components";
//import { recipes, recipes_category } from "../../utils";
import { colors } from "../../utils";
import {
  useRecipeCategoriesQuery,
  useRecipeByCategoryQuery,
} from "../../generated/graphql";
import { CDN } from "../../utils/config/defaults";
import { wait } from "../../utils/modules/wait";

export const Recipes: React.FC<any> = ({ navigation }) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [category, SetCategory] = React.useState("");
  const [recipes, SetRecipes] = React.useState<any[]>([]);

  const _categories = useRecipeCategoriesQuery({
    fetchPolicy: "cache-first",
    onCompleted: (res) => {
      if (res.recipeCategories) {
        SetCategory(res.recipeCategories[0].id);
      }
    },
  });

  const _recipes = useRecipeByCategoryQuery({
    fetchPolicy: "cache-first",
    variables: {
      cat_id: "NO",
    },
  });

  /*
  const { data, loading, error, refetch } = useRecipeCategoriesQuery({
    fetchPolicy: "cache-first",
    onCompleted: (data) => {
      if (data.recipeCategories) {
        SetCategory(data.recipeCategories[0].id);
        SetRecipes(data.recipeCategories[0].recipes);
      }
    },
  });
  */
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    _recipes.refetch();
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const handleSelectingCategory = (cat_id: string) => {
    SetCategory(cat_id);
    const category = _categories.data!.recipeCategories.find(
      (x) => x.id === cat_id
    );
    _recipes.refetch({ cat_id: category.id });
    //SetRecipes(category!.recipes);
  };

  const handleSearch = (v: string) => {
    setSearchQuery(v);
  };

  if (_categories.loading || _categories.error) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headingContainer}>
          <Heading title={"Recipes"} />
          <SearchInput change={(v) => setSearchQuery(v)} />
        </View>
        <View style={styles.recipesContainer}>
          {searchQuery.length > 0 ? (
            <RecipeSearchResult navigation={navigation} query={searchQuery} />
          ) : (
            <ScrollView
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
              showsVerticalScrollIndicator={false}
            >
              <Slider
                color={colors.c3}
                selected={category}
                onSelect={(category: string) =>
                  handleSelectingCategory(category)
                }
                categories={_categories.data!.recipeCategories as any}
              />
              {_recipes.loading || _recipes.error ? (
                <Loading />
              ) : (
                _recipes.data.recipeByCategory.map((recipe, key) => (
                  <RecipeThumbnail
                    pressed={() =>
                      navigation.push("RecipeDetails", { id: recipe.id })
                    }
                    title={recipe.name}
                    img={`${CDN}/${recipe.image}`}
                    time={recipe.total}
                    carbs={"-1"}
                    key={key}
                  />
                ))
              )}
              <View style={{ height: 200 }} />
            </ScrollView>
          )}
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
