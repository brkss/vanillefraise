import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Item } from "./Item";

interface Props {
  edit: (id: string) => void;
}

export const NewPlanNutritionSlider: React.FC<Props> = ({ edit }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vitamins</Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        <Item pressed={() => edit("hello")} />
        <Item pressed={() => edit("hello")} />
        <Item pressed={() => edit("hello")} />
        <Item pressed={() => edit("hello")} />
        <Item pressed={() => edit("hello")} />
        <Item pressed={() => edit("hello")} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  title: {
    fontSize: 22,
    color: "#434343",
    fontWeight: "bold",
    fontFamily: "AvNextBold",
  },
});
