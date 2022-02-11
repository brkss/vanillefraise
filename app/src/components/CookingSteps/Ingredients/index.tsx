import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { useFonts } from "expo-font";
import { Item } from "./Item";
import { Button } from "../../";

export const IngredientStep: React.FC = () => {
  const [helviticaCondensed] = useFonts({
    "helvitica-condesed": require("../../../assets/helvitica-condensed.otf"),
  });

  if (!helviticaCondensed) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading..</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
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
      <Button txt={"Done !"} clicked={() => {}} />
    </View>
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
