import React from "react";
import {
  View,
  Platform,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import {
  Close,
  Ingredients,
  Instructions,
  RecipeMetaData,
  Loading,
  Info,
  RecipeNutrition,
  SaveRecipe,
  RecipeHealthLabel,
  RecipesTabs,
  BluredButton,
  ReportRecipe,
} from "../../components";
import {
  useRecipeQuery,
  useRecipeEnergyQuery,
  TranslatedIngredient,
} from "../../generated/graphql";
import { CDN } from "../../utils/config/defaults";
import { saveRecipe, IRecipe, isRecipeSaved } from "../../utils/modules/save";

const TABS = ["INGREDIENTS", "INSTRUCTIONS", "NUTRITIONS"];

export const RecipeDetails: React.FC<any> = ({ route, navigation }) => {
  const [tab, setTab] = React.useState(TABS[0]);
  const [saved, SetSaved] = React.useState(false);
  const [servings, setServings] = React.useState(1);
  const { id, mealId } = route.params;
  const _energy = useRecipeEnergyQuery({
    variables: {
      recipe_id: id,
    },
  });
  const { data, loading, error } = useRecipeQuery({
    fetchPolicy: "cache-first",
    variables: {
      id: id,
    },
    onCompleted: async (res) => {
      setServings(data.recipe.recipe.serving || 22);
      if (res.recipe.status) {
        const isit = await isRecipeSaved(res.recipe.recipe.id);
        SetSaved(isit);
      }
    },
  });

  if (
    loading ||
    error ||
    !data ||
    _energy.loading ||
    _energy.error ||
    !data.recipe.status
  ) {
    return <Loading />;
  }

  const handleSavingRecipe = async () => {
    const recipe = data.recipe.recipe;
    const res: IRecipe = {
      name: recipe?.name,
      id: recipe?.id,
      carbs: "00",
      img: recipe?.image,
      time: recipe?.total,
    };
    await saveRecipe(res);
    SetSaved((curr) => !curr);
  };

  return (
    <View
      style={[styles.container, { paddingTop: Platform.OS === "ios" ? 0 : 30 }]}
    >
      <View style={styles.topBar}>
        <SaveRecipe
          saved={saved}
          save={async () => await handleSavingRecipe()}
        />
        <Info
          txt={`${_energy.data.recipeEnergy} kcal per serving`}
          clicked={() => {}}
        />
        <Close pressed={() => navigation.popToTop()} />
      </View>
      <ScrollView
        bounces={false}
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <ImageBackground
          style={styles.image}
          source={{
            uri: `${CDN}/${data.recipe.recipe!.image}`,
          }}
        ></ImageBackground>
        <View style={styles.content}>
          <RecipeMetaData
            title={data.recipe.recipe!.name}
            description={data.recipe.recipe!.description || undefined}
            prep={data.recipe.recipe?.prep || undefined}
            cook={data.recipe.recipe?.cook || undefined}
            total={data.recipe.recipe?.total || undefined}
          />
          {/*<RecipeHealthLabel
            labels={data.recipe.recipe.healthlabel.map((hl) =>
              hl.label.split("_").join(" ")
            )}
          />*/}
          <RecipesTabs selectTab={(t) => setTab(t)} />
          {
            {
              NUTRITIONS: <RecipeNutrition recipeId={id} />,
              INGREDIENTS: (
                  <Ingredients
                    servings={data.recipe.recipe.serving || 1}
                    ingredients={
                      data.recipe.ingredients as TranslatedIngredient[]
                    }
                  />
              ),
              INSTRUCTIONS: (
                <Instructions
                  instructions={data.recipe.instructions.sort(
                    ({ index: a }, { index: b }) => a - b
                  )}
                />
              ),
            }[tab]
          }
          <ReportRecipe recipeId={data.recipe.recipe.id} />
          <View style={{ height: 150 }} />
        </View>
      </ScrollView>
      <View
        style={{
          position: "absolute",
          width: "100%",
          bottom: 20,
          padding: 10,
          //padding: 10,
          //paddingBottom: 20,
          //backgroundColor: "transparent",
        }}
      >
        {!mealId ? (
          <BluredButton
            clicked={() =>
              navigation.push("MealsOptions", {
                recipe: data.recipe.recipe.id,
              })
            }
            txt={"Add To Meal"}
          />
        ) : (
          <BluredButton
            txt={"Start Cooking"}
            clicked={() =>
              navigation.push("Cooking", {
                id: data.recipe.recipe!.id,
                mealId: mealId,
              })
            }
          />
        )}
      </View>
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
  topBar: {
    padding: 5,
    top: 0,
    height: 60,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
