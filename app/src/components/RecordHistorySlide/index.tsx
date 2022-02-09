import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { Item } from "./Item";

export const RecordHistorySlide: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Letest Records</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Item />
        <Item />
        <Item />
        <Item />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
