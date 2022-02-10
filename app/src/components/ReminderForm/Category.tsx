import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export const Categories: React.FC = () => {
  return (
    <ScrollView horizontal style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.itemText}>Meals</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>Medicine</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
  },
  item: {
    padding: 10,
    backgroundColor: "#0604D2",
    borderRadius: 7,
    minWidth: 138,
    marginRight: 10,
  },
  itemText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "helvitica-condesed",
  },
});
