import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { IngredientItem } from "./Item";
import { RecipeServing } from "./Servings";
import { TranslatedIngredient } from "../../generated/graphql";
import { scaleRecipe } from "../../utils/modules/scale_recipe";

interface Props {
  ingredients: TranslatedIngredient[];
  servings: number;
  lang: string;
}

export const Ingredients: React.FC<Props> = ({
  ingredients,
  servings,
  lang,
}) => {
  const [scale, setScale] = React.useState<number>(servings);

  const handleLang = (ingredient: TranslatedIngredient) => {
    if (lang === "es" && ingredient.es.unit && ingredient.es.ingredient)
      return { unit: ingredient.es.unit, ingredient: ingredient.es.ingredient };
    else if (lang === "ar" && ingredient.ar.unit && ingredient.ar.ingredient)
      return { unit: ingredient.ar.unit, ingredient: ingredient.ar.ingredient };
    else if (lang === "fr" && ingredient.fr.unit && ingredient.fr.ingredient)
      return { unit: ingredient.fr.unit, ingredient: ingredient.fr.ingredient };
    else lang === "en";
    return { unit: ingredient.unit, ingredient: ingredient.ingredients };
  };

  return (
    <View style={styles.container}>
      <RecipeServing
        servings={servings}
        onChange={(n: number) => {
          setScale(n);
        }}
      />
      <Text style={styles.title}>Ingredients</Text>
      {scaleRecipe(servings, scale, ingredients).map((ing, key) => (
        <IngredientItem
          originUnit={ing.unit}
          key={key}
          txt={handleLang(ing).ingredient}
          amount={ing.amount}
          unit={handleLang(ing).unit}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  title: {
    fontSize: 25,
    marginBottom: 15,
    fontWeight: "bold",
    fontFamily: "AvNextBold",
  },
});
