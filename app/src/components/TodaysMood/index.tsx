import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Item } from "./Item";

export const TodaysMood: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How you feeling today ?</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.list}
        >
        <Item />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //padding: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  list: {
    //
    marginTop: 20
  },
});
