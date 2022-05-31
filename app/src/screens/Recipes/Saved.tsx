import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Heading, RecipeThumbnail } from "../../components";
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
        <View style={styles.recipes}>
          {recipes.map((r, key) => (
            <RecipeThumbnail
              key={key}
              title={r.name}
              img={`${CDN}/${r.img}`}
              time={r.time}
              pressed={() => navigation.push("RecipeDetails", { id: r.id })}
            />
          ))}
        </View>
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
    //
  },
});
