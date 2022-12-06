import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  //SafeAreaView,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import {
  Heading,
  Slider,
  RecipeThumbnail,
  Loading,
  SearchInput,
  RecipeSearchResult,
  SavedRecipesButton,
} from "../../components";
//import { recipes, recipes_category } from "../../utils";
import { colors } from "../../utils";
import {
  useRecipeCategoriesQuery,
  useRecipeByCategoryQuery,
} from "../../generated/graphql";
import { CDN } from "../../utils/config/defaults";
import { wait } from "../../utils/modules/wait";
import { SafeAreaView } from "react-native-safe-area-context";

const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
  const paddingToBottom = 20;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};

// seed to randomize recipes !
const SEED = Math.floor(Math.random() * 1000);

export const Recipes: React.FC<any> = ({ navigation }) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [category, SetCategory] = React.useState("NO");
  const [batch, setBatch] = React.useState(1);
  const [refetching, setRefetching] = React.useState(false);
  const [isDone, setIsDone] = React.useState(false);

  const _categories = useRecipeCategoriesQuery({
    fetchPolicy: "cache-first",
    onCompleted: (res) => {
      if (res.recipeCategories.length > 0) {
        SetCategory(res.recipeCategories[0].id);
      }
    },
  });

  const _recipes = useRecipeByCategoryQuery({
    fetchPolicy: "cache-first",
    variables: {
      cat_id: "NO",
      batch: 1,
      seed: SEED,
    },
  });

  const get_category_name = (id: string, categories: any[]) => {
    if (id == "NO") return categories[0].name;
    for (let cat of categories) {
      if (cat.id == id) return cat.name;
    }
  };

  const handleScroll = (nativeEvent: any) => {
    if (!refetching && isCloseToBottom(nativeEvent) && !isDone) {
      setRefetching(true);
      _recipes
        .fetchMore({
          variables: { batch: batch + 1, cat_id: category, seed: SEED },
          updateQuery: (oldRecipes, { fetchMoreResult }) => {
            return {
              recipeByCategory: [
                ...oldRecipes.recipeByCategory,
                ...fetchMoreResult.recipeByCategory,
              ],
            };
          },
        })
        .then((res) => {
          if (res.data.recipeByCategory.length === 0) {
            setIsDone(true);
          }
          setRefetching(false);
          setBatch((curr) => curr + 1);
        });
      //console.log("bottom reched !");
    }
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    //_recipes.refetch();
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const handleSelectingCategory = (cat_id: string) => {
    SetCategory(cat_id);
    const category = _categories.data!.recipeCategories.find(
      (x) => x.id === cat_id
    );
    setBatch(1);
    setIsDone(false);
    _recipes.refetch({ cat_id: category.id, batch: 1 });
    //SetRecipes(category!.recipes);
  };

  if (_categories.loading || _categories.error) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headingContainer}>
          <View style={styles.headingSperator}>
            <Heading title={"Recipes"} />
            <SavedRecipesButton
              onClick={() => navigation.push("SavedRecipes")}
            />
          </View>
          <SearchInput change={(v) => setSearchQuery(v)} />
        </View>
        <View style={styles.recipesContainer}>
          {searchQuery.length > 0 ? (
            <RecipeSearchResult navigation={navigation} query={searchQuery} />
          ) : (
            <ScrollView
              //bounces={false}
              onScroll={({ nativeEvent }) => handleScroll(nativeEvent)}
              scrollEventThrottle={400}
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
              <Text style={styles.title}>
                {get_category_name(
                  category,
                  _categories.data!.recipeCategories as any
                )}
              </Text>
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
              {refetching && (
                <View style={styles.indicatorContainer}>
                  <ActivityIndicator size={"small"} />
                </View>
              )}
              <View style={{ height: 300 }} />
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
  title: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "AbFace", 
    marginBottom: 10,
    color: "#434343",
  },
  headingContainer: {
    //flex: 0.14,
  },
  recipesContainer: {
    //flex: 0.86,
    //flex:1
  },
  headingSperator: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  indicatorContainer: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
