import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

interface Props {
  pressed: () => void;
}

export const AddNutritionPlan: React.FC<Props> = ({pressed}) => {
  return (
    <Pressable onPress={pressed} style={styles.container}>
      <Text style={styles.txt}>Create new plan.</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: "#DFDCDC",
    margin: 5,
    borderRadius: 17,
    padding: 15,
    justifyContent: "flex-end",
  },
  txt: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "AvNextBold",
  },
});
