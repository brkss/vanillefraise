import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";

interface Props {
  txt: string;
  clicked: () => void;
}

export const BluredButton: React.FC<Props> = ({ clicked, txt }) => {
  return (
    <Pressable style={styles.box} onPress={() => clicked()}>
      <BlurView intensity={45} tint="dark" style={styles.container}>
        <Text style={styles.txt}>{txt}</Text>
      </BlurView>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "#434343",
    width: 200,
    padding: 15,
    borderRadius: 10,
  },
  txt: {
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  box: {
    overflow: "hidden",
    borderRadius: 50,
  },
});
