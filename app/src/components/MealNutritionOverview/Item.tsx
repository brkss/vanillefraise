import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  label: string;
  quantity: number;
}

export const Item: React.FC<Props> = ({ label, quantity }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {quantity}% {label}
      </Text>
      <View style={[styles.bar, { width: `${quantity}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  label: {
    fontSize: 10,
    fontWeight: "bold",
  },
  bar: {
    borderRadius: 10,
    marginTop: 3,
    height: 10,
    backgroundColor: "#C8E8B1",
  },
});
