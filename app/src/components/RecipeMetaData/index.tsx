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
      <Text style={styles.title}>{title.trim()} </Text>
      <Text style={styles.total}>about {total} min to make</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "left",
    fontFamily: "AbFace",
    color: "#292929",
    marginBottom: 3,
  },
  total: {
    fontFamily: 'AvNext',
    fontSize: 16,
    opacity: .6,
    fontWeight: '700'
  },
  description: {
    fontSize: 14,
    opacity: 0.8,
    marginTop: 10,
    fontFamily: "AvNext",
    fontWeight: "900",
    lineHeight: 17,
  },
});
