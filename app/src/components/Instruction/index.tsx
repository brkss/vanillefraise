import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Item } from "./Item";
import { TranslatedInstruction } from "../../generated/graphql";

interface Props {
  instructions: any[];
  lang: string;
}

export const Instructions: React.FC<Props> = ({ instructions, lang }) => {
  const handleLang = (instruction: TranslatedInstruction) => {
    if (lang === "es" && instruction.es) return instruction.es;
    else if (lang === "fr" && instruction.fr ) return instruction.fr;
    else if (lang === "ar" && instruction.ar ) return instruction.ar;
    else return instruction.raw;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Instructions</Text>
      {instructions.map((instruction, key) => (
        <Item
          index={instruction.index}
          txt={handleLang(instruction)}
          key={key}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
  title: {
    fontSize: 25,
    marginBottom: 15,
    fontWeight: "bold",
  },
});
