import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { IngredientItem } from "./Item";
import { RecipeServing } from "./Servings";
import { TranslatedIngredient } from "../../generated/graphql";
import { scaleRecipe, scale } from "../../utils/modules/scale_recipe";
import { LanguagePicker } from "../General";
import { translate_ingredients } from "../../utils/modules/translate";

interface Props {
  ingredients: TranslatedIngredient[];
  servings: number;
}

interface IIngredient {
  txt: string;
  amount: number;
  unit: string;
}

export const Ingredients: React.FC<Props> = ({ ingredients, servings }) => {
  const [scale, setScale] = React.useState<number>(servings);
  const [translated, setTranslated] = React.useState<IIngredient[]>([]);
  const [cache, setCache] = React.useState<{ [key: string]: IIngredient[] }>(
    {}
  );
  const [fetching, setFetching] = React.useState(false);
  const handleLangChange = async (lang: string) => {
    if (lang === "en") {
      setTranslated([]);
      return;
    }
    if (cache[lang]) {
      setTranslated(cache[lang]);
      return;
    }
    setFetching(true);
    const res: IIngredient[] = await translate_ingredients(
      lang,
      ingredients.map((ing) => ({
        txt: ing.ingredients,
        amount: ing.amount,
        unit: ing.unit,
      }))
    );
    setFetching(false);
    setCache({ ...cache, [lang]: res });
    //console.log("res : ", res);
    setTranslated(res);
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
      <LanguagePicker langChange={(l) => handleLangChange(l)} />
      {fetching && <Text style={styles.hint}>please wait...</Text>}
      {translated.length === 0
        ? scaleRecipe(servings, scale, ingredients).map((ing, key) => (
            <IngredientItem
              originUnit={ing.unit}
              key={key}
              txt={ing.ingredients}
              amount={ing.amount.toString()}
              unit={ing.unit}
            />
          ))
        : translated
            .map((ing) => ({ ...ing, amount: (ing.amount * scale) / servings }))
            .map((ing, key) => (
              <IngredientItem
                originUnit={ing.unit}
                key={key}
                txt={ing.txt}
                amount={ing.amount.toString()}
                unit={ing.unit}
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
  hint: {
    fontFamily: "AvNextBold",
    marginBottom: 20,
  },
});
