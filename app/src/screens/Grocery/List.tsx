import React from "react";
import { View, Text, StyleSheet } from "react-native";
//import { SafeAreaView } from "react-native-safe-area-context";

export const GroceryList: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Grocery List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 25,
  },
  title: {
    fontFamily: "AvNextBold",
    fontSize: 30,
    fontWeight: "bold",
  },
});
