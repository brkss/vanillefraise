import React from "react";
import { View, StyleSheet, Text, ScrollView, Animated } from "react-native";
import { useFonts } from "expo-font";
import { Item } from "./Item";
import { Button } from "../../";

interface Props {
  finish: () => void;
}

export const IngredientStep: React.FC<Props> = ({ finish }) => {
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
        You'll need these following ingredients for your recipes
      </Text>
      <Text style={styles.hint}>press any ingredient you’ve prepared !</Text>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={styles.ings}
      >
        <Item />
        <Item />
        <Item />
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
    marginVertical: 15,
    opacity: 0.7,
    fontSize: 20,
    fontFamily: "helvitica-condesed",
  },
  ings: {
    flex: 1,
    marginTop: 30,
    //justifyContent: "space-evenly",
  },
});
