import React from "react";
import { View, StyleSheet, Text, ScrollView, Animated } from "react-native";
import { useFonts } from "expo-font";
import { Item } from "./Item";
import { Button } from "../../General/Button";

interface Props {
  finish: () => void;
  ingredients: any[];
}

export const IngredientStep: React.FC<Props> = ({ finish, ingredients }) => {
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
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={styles.ings}
      >
        {ingredients.map((ing, key) => (
          <Item key={key} txt={ing.raw} />
        ))}
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
