import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Record: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🏃‍♀️</Text>
      <Text style={styles.txt}>RUN</Text>
      <Text style={styles.calories}>403 Cal</Text>
      <Text style={styles.date}>02/03/2022 18:05</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#ffe0de",
    marginRight: 10,
    //alignItems: "center",
    borderRadius: 12,
  },
  txt: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#434343",
    marginTop: 8,
    textAlign: "left",
  },
  icon: {
    textAlign: "center",
    fontSize: 40,
  },
  date: {
    fontSize: 10,
    marginTop: 6,
  },
  calories: {
    fontSize: 12,
    color: "#434343",
    fontWeight: "bold",
    textAlign: "left",
  },
});
