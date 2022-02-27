import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
//import { EmojiProvider, Emoji } from "react-apple-emojis";
//import emojiData from 'react-apple-emojis/lib/data.json'

interface Props {
  name: string;
  icon: string;
  onSelect: () => void;
  isSelected: boolean;
}

export const Item: React.FC<Props> = ({ icon, name, onSelect, isSelected }) => {
  return (
    <Pressable
      onPress={() => onSelect()}
      style={[
        styles.container,
        { backgroundColor: isSelected ? "#B7E0A1" : "#DCDCDC" },
      ]}
    >
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.title}>{name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DCDCDC",
    borderRadius: 13,
    height: 100,
    width: 90,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  icon: {
    fontSize: 36,
    marginBottom: 5,
  },
});
