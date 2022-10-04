import React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";

interface Props {
  txt: string;
  color?: string;
  bg?: string;
  clicked: () => void;
}

export const Button: React.FC<Props> = ({ txt, clicked, color, bg }) => {
  
  return (
    <Pressable
      style={[styles.container, { backgroundColor: bg ? bg : "#323232" }]}
      onPress={() => clicked()}
    >
      <Text style={[styles.txt, { color: color ? color : "white" }]}>
        {txt}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#323232",
    width: "100%",
    marginTop: 10,
    padding: 10,
 paddingVertical: 15,
 paddingTop: 18,   
	borderRadius: 13,
  },
  txt: {
    textAlign: "center",
    color: "white",
    fontFamily: "AvNextBold",
    fontSize: 20,
    fontWeight: "bold",
    //marginBottom: 5,
  },
});
