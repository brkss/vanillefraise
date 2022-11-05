import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

interface Props {
  navigateToRecipes: () => void;
}

export const EmptyGroceryList: React.FC<Props> = ({navigateToRecipes}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>
        Choose recipes to fill up your grocery list
      </Text>
      <Pressable onPress={() => navigateToRecipes()} style={styles.btn}>
        <Text style={styles.btnText}>Find Recipes</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  txt: {
    fontWeight: "bold",
    fontFamily: "AvNextBold",
    fontSize: 16,
  },
  btn: {
    padding: 15,
    backgroundColor: "#FFE8E8",
    width: "100%",
    marginTop: 20,
    borderRadius: 15,
  },
  btnText: {
    fontFamily: "AvNextBold",
    color: "#434343",
    fontWeight: "bold",
    fontSize: 19,
    textAlign: "center",
  },
});
