import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  name: string;
  icon: string;
  color: string;
}

export const Item: React.FC<Props> = ({ name, icon, color }) => {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.title}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D9EFB8",
    marginRight: 10,
    height: 88,
    width: 68,
    //padding: 15,
    maxHeight: 100,
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 33,
    textAlign: "center",
  },
  title: {
    fontSize: 11,
    fontWeight: "bold",
    marginTop: 4,
  },
});
