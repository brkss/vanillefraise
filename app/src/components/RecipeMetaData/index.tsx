import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Info } from "./Info";

interface Props {
  title: string;
  description?: string;
  prep?: string;
  cook?: string;
  total?: string;
}

export const RecipeMetaData: React.FC<Props> = ({
  title,
  description,
  prep,
  cook,
  total,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> {title.trim()} </Text>
      <Info prep={prep} cook={cook} total={total} />
      {description ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "left",
  },
  description: {
    fontSize: 14,
    opacity: 0.8,
    marginTop: 10,
  },
});
