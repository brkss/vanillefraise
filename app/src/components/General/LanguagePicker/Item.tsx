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
        { backgroundColor: selected ? "#383838" : "white" },
      ]}
      onPress={onSelect}
    >
      <Text style={[styles.txt, { color: selected ? "white" : "#434343" }]}>
        {txt}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 7,
    paddingHorizontal: 20,
    paddingVertical: 9,
    paddingTop: 11,
    //backgroundColor: "#383838",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#383838",
  },
  txt: {
    fontFamily: "AvNextBold",
    fontWeight: "bold",
    fontSize: 17,
    color: "#434343",
  },
});
