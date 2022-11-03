import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
//import { SafeAreaView } from "react-native-safe-area-context";
import { GroceryItem } from "../../components";

const _tmp = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const GroceryList: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Grocery List</Text>
      <ScrollView>
        {_tmp.map((_, key) => (
          <GroceryItem key={key} />
        ))}
      </ScrollView>
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
    marginBottom: 10,
    color: "#434343",
  },
});
