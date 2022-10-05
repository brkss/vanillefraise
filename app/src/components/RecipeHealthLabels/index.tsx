import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { Item } from "./Item";

interface Props {
  labels: string[];
}

export const RecipeHealthLabel: React.FC<Props> = ({ labels }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Health Labels</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {labels.map((label, key) => (
          <View key={key} style={styles.item}>
            <Item label={label} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  item: {
    marginRight: 7,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
	fontFamily: "AvNextBold"
  },
});
