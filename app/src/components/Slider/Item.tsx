import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

interface Props {
  name: string;
  icon: string;
  color: string;
  selected: boolean;
  onSelect: () => void;
}

export const Item: React.FC<Props> = ({
  name,
  icon,
  color,
  selected,
  onSelect,
}) => {
  return (
    <Pressable
      onPress={() => onSelect()}
      style={[
        styles.container,
        { backgroundColor: selected ? "#ffe1b5" : color },
      ]}
    >
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.title}>{name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D9EFB8",
    marginRight: 10,
    height: 88,
    width: 68,
    paddingHorizontal: 3,
    //padding: 15,
    maxHeight: 100,
    //borderWidth: 1,

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
    textAlign: "center",
  },
});
