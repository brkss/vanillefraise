import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

interface Props {
  name: string;
  icon: string;
  selected: boolean;
  onSelect: () => void;
}

export const Item: React.FC<Props> = ({ name, icon, selected, onSelect }) => {
  return (
    <Pressable onPress={() => onSelect()} style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <Text style={styles.title}>{name}</Text>
      <View style={[styles.indec, { opacity: selected ? 1 : 0 }]} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  iconContainer: {
    height: 70,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "#EDEAEA",
    marginBottom: 6,
  },
  icon: {
    fontSize: 21,
  },
  title: {
    fontSize: 17,
    fontWeight: "400",
    textAlign: "center",
  },
  indec: {
    height: 10,
    width: 10,
    backgroundColor: "black",
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 7,
  },
});
