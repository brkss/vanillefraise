import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const NothingFound: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>🥑</Text>
      <Text style={styles.info}>0 RECIPE FOUND :( </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //
    alignItems: "center",
    justifyContent: "center",
    //flex: 1,
    height: "100%",
  },
  txt: {
    fontSize: 200,
  },
  info: {
    fontSize: 20,
    fontWeight: "500",
    opacity: 0.8,
    marginTop: 20
  },
});
