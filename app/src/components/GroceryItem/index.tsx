import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const GroceryItem: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>Garlic</Text>
          <Text style={styles.product}>Ail semoule 55g - GAYA</Text>
        </View>
        <View>
          <Text style={styles.quantity}>100g</Text>
          <Text style={styles.total}>28.6Dhs</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#ECE8E8",
    marginBottom: 10,
    borderRadius: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 21,
    color: "#434343",
    fontFamily: "AvNextBold",
    marginBottom: 7,
  },
  product: {
    fontFamily: "AvNextBold",
    color: "#434343",
  },
  quantity: {
    marginBottom: 5,
    fontSize: 17,
    color: "#434343",
    fontFamily: "AvNextBold",
  },
  total: {
    fontFamily: "AvNextBold",
    color: '#434343'
  },
});
