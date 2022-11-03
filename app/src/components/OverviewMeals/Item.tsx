import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

interface Props {
  title: string;
  color: string;
  navigate: () => void;
  recipes: number;
}

export const MealItem: React.FC<Props> = ({
  color,
  title,
  navigate,
  recipes,
}) => {
  return (
    <Pressable
      onPress={() => navigate()}
      style={[styles.container, { backgroundColor: "#ECE8E8" }]}
    >
      <Text style={styles.recipes}>{recipes} recipes</Text>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    height: 120,
    justifyContent: "flex-end",
    //borderWidth: 1,
    borderRadius: 11,
  },
  recipe: {
    color: "black",
    fontSize: 11,
    fontWeight: "400",
	  fontFamily: "AvNextBold"
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
	  fontFamily: "AvNextBold",
	  marginTop: 5,
	  color: "#434343"
  },
  recipes: {
    color: "black",
    fontSize: 13,
	fontFamily: "AvNext"
    //color: "#434343",
  },
});
