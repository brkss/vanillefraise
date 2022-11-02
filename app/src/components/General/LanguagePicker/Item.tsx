import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

interface Props {
  txt: string;
  id: string;
  selected?: boolean;
  onSelect: () => void;
}

export const LanguageItem: React.FC<Props> = ({
  id,
  txt,
  selected,
  onSelect,
}) => {
  return (
    <Pressable
      style={[
        styles.container,
        { borderColor: selected ? "#FFCBCB" : "transparent" },
      ]}
      onPress={onSelect}
    >
      <Text style={styles.txt}>{txt}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 7,
    paddingHorizontal: 20,
    paddingVertical: 9,
    paddingTop: 11,
    backgroundColor: "#FFE8E8",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "transparent",
  },
  txt: {
    fontFamily: "AvNextBold",
    fontWeight: "bold",
    fontSize: 17,
  },
});
