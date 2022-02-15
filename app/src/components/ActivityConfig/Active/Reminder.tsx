import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const ActiveReminder: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🥛 DRINK WATER</Text>
      <Text style={styles.time}>-00:20:00</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: "100%",
    backgroundColor: "#E7E7E7",
    justifyContent: "center",
    borderRadius: 20,
    padding: 20,
    opacity: 0.7,
  },
  title: {
    fontSize: 20,
    color: "#434343",
    fontWeight: "bold",
    fontFamily: "helvitica-condesed",
  },
  time: {
    fontSize: 19,
    color: "#434343",
    fontFamily: "helvitica-condesed",
    //textAlign: "right",
    opacity: 0.8,
  },
});
