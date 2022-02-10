import React from "react";
import { View, StyleSheet, Text } from "react-native";

interface Props {
  name: string;
  active?: boolean;
}

export const Item: React.FC<Props> = ({ name, active }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.txt, { opacity: active ? 1 : 0.7 }]}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginRight: 10,
  },
  txt: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
  },
});
