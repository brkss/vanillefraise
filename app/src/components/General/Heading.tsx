import React from "react";
import { View, StyleSheet, Text } from "react-native";

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
    //marginBottom: 10,
  },
  title: {
    fontSize: 33,
    fontWeight: "bold",
  },
});
