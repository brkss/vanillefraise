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
    marginBottom: 20,
    //padding: 15,
    paddingBottom: 5,
    //borderRadius: 12,
    //backgroundColor: "#F7DBDB",
	borderColor: 'transparent',
	//borderBottomColor: "red",
	//borderWidth: 2,
    width: "100%",
  },
  txt: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#D87D7D",
    //textAlign: "center",
    fontFamily: "AvNextBold",
  },
});
