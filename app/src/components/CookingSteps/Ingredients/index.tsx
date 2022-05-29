import React from "react";
import { View, StyleSheet, Text, ScrollView, Animated } from "react-native";
import { useFonts } from "expo-font";
import { Item } from "./Item";
import { Button } from "../../General/Button";
import { Ingredient } from "../../../generated/graphql";
import { scaleRecipe } from "../../../utils/modules/scale_recipe";

interface Props {
  finish: () => void;
  ingredients: Ingredient[];
  servings: number;
  originalServings: number;
}

export const IngredientStep: React.FC<Props> = ({
  finish,
  ingredients,
  servings,
  originalServings,
}) => {
  const opcAnim = React.useRef(new Animated.Value(0)).current;
  const [helviticaCondensed] = useFonts({
    "helvitica-condesed": require("../../../assets/helvitica-condensed.otf"),
  });

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
              unit={ing.unit}
              key={key}
              txt={ing.ingredients}
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
  },
  hint: {
    marginTop: 15,
    //marginBottom: 5,
    opacity: 0.7,
    fontSize: 20,
    fontFamily: "helvitica-condesed",
  },
  ings: {
    flex: 1,
    marginTop: 10,
    //justifyContent: "space-evenly",
  },
});
