import React from 'react'
import { View, Text, StyleSheet } from "react-native";

export const NoResultsFound: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Sorry, we couldn't found any results.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: "#D8D8D8",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontWeight: "bold",
    fontSize: 15,
  },
});