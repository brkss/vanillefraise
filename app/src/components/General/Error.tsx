import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface Props {
  txt: string;
  close: () => void;
}

export const Error: React.FC<Props> = ({ txt, close }) => {
  return (
    <Pressable onPress={() => close()} style={styles.container}>
      <Text style={styles.txt}>{txt}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    padding: 17,
    paddingTop: 17,
    borderRadius: 12,
    backgroundColor: "#F7DBDB",
    width: "100%",
  },
  txt: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#5C5C5C",
    textAlign: "center",
    fontFamily: "helvitica-condesed",
  },
});
