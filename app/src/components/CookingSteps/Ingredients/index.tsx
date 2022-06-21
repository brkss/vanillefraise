import React from "react";
import { View, StyleSheet, Text, ScrollView, Animated } from "react-native";
import { useFonts } from "expo-font";
import { Item } from "./Item";
import { Button } from "../../General/Button";
import { TranslatedIngredient } from "../../../generated/graphql";
import { scaleRecipe } from "../../../utils/modules/scale_recipe";
import { Languages } from "../../../components/Translation/Languages";

interface Props {
  finish: () => void;
  ingredients: TranslatedIngredient[];
  servings: number;
  originalServings: number;
}

export const IngredientStep: React.FC<Props> = ({
  finish,
  ingredients,
  servings,
  originalServings,
}) => {
  const [lang, setLang] = React.useState<string>("en");
  const opcAnim = React.useRef(new Animated.Value(0)).current;
  const [helviticaCondensed] = useFonts({
    "helvitica-condesed": require("../../../assets/helvitica-condensed.otf"),
  });

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

  React.useEffect(() => {
    Animated.timing(opcAnim, {
      toValue: 1,
      useNativeDriver: false,
      duration: 500,
    }).start();
  }, [opcAnim]);

  if (!helviticaCondensed) {
    return (
      <View
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      ></View>
    );
  }

  return (
    <Animated.View style={[styles.container, { opacity: opcAnim }]}>
      <Text style={styles.title}>
        You'll need the following ingredients for your recipe
      </Text>
      <Languages
        isCooking={true}
        onSelect={(l) => setLang(l)}
        selected={lang}
      />
      <View style={{ marginTop: 10 }} />
      <Text style={styles.hint}>press any ingredient you’ve prepared !</Text>
      <Text style={styles.hint}>
        Managed To Serve {servings} person{servings > 1 ? "s" : ""}
      </Text>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={styles.ings}
      >
        {scaleRecipe(originalServings, servings, ingredients).map(
          (ing, key) => (
            <Item
              amount={ing.amount}
              unit={handleLang(ing).unit}
              key={key}
              txt={handleLang(ing).ingredient}
            />
          )
        )}
      </ScrollView>
      <Button txt={"Done !"} clicked={() => finish()} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontFamily: "helvitica-condesed",
    marginVertical: 15,
    marginBottom: 0,
  },
  hint: {
    //marginTop: 7,
    //marginBottom: 5,
    opacity: 0.7,
    fontSize: 15,
    fontFamily: "helvitica-condesed",
  },
  ings: {
    flex: 1,
    marginTop: 10,
    //justifyContent: "space-evenly",
  },
});
