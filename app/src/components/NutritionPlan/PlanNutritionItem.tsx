import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const PlanNutritientItem: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.line} />
        <View>
          <Text style={styles.title}>Vitamin C</Text>
          <Text style={styles.quantity}>~50mg per day</Text>
        </View>
      </View>
      <Text style={styles.description}>
        Vitamin C is a powerful antioxidant, protecting you from free radicals
        and lowering your chance of skin cancer, low levels of vitamin C can
        cause easy bruising and bleeding gums, as well as slower-healing sores.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
  },
  line: {
    height: "100%",
    backgroundColor: "#434343",
    borderRadius: 100,
    width: 7,
    marginRight: 10,
  },
  title: {
    fontFamily: "AvNextBold",
    fontSize: 15,
    marginBottom: 3,
  },
  quantity: {
    fontFamily: "AvNextBold",
    fontSize: 15,
  },
  description: {
    fontSize: 14,
    marginTop: 10,
  },
});
