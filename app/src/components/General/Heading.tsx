import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

interface Props {
  title: string;
}

export const Heading: React.FC<Props> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //marginTop: 50,
    marginBottom: 10,
  },
  title: {
    color: "#434343",
    fontSize: 33,
    fontWeight: "bold",
    fontFamily: "AvNextBold",
  },
});
