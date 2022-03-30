import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../utils";

interface Props {
  txt: string;
}

export const IngredientItem: React.FC<Props> = ({ txt }) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}></View>
      <Text style={styles.txt}>{txt}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  circle: {
    height: 20,
    width: 20,
    backgroundColor: "#696969",
    //backgroundColor: colors.c2,
    marginRight: 10,
    borderRadius: 20,
  },
  txt: {
    fontSize: 14,
    fontWeight: "700",
    opacity: 0.7,
  },
});
