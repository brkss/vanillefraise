import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Heading, RecipeThumbnail, NothingFound } from "../../components";
import { getSavedRecipes, IRecipe } from "../../utils/modules/save";
import { CDN } from "../../utils/config/defaults";

export const SavedRecipes: React.FC<any> = ({ navigation }) => {
  const [recipes, SetRecipes] = React.useState<IRecipe[]>([]);

  React.useEffect(() => {
    (async () => {
      const rs = await getSavedRecipes();
      SetRecipes(rs);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Heading title={"Saved Recipes"} />
        <ScrollView style={styles.recipes}>
          {recipes.length == 0 ? <NothingFound /> : null}
          {recipes.map((r, key) => (
            <RecipeThumbnail
              key={key}
              title={r.name}
              img={`${CDN}/${r.img}`}
              time={r.time}
              pressed={() => navigation.push("RecipeDetails", { id: r.id })}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //
    flex: 1,
    padding: 15,
  },
  recipes: {
    paddingTop: 20,
  },
});
