import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

interface Props {
  pressed: () => void;
}

export const Item: React.FC<Props> = ({pressed}) => {
  return (
    <Pressable onPress={pressed} style={styles.container}>
      <View
        style={{ flex: 1, justifyContent: "center", alignItems: "baseline" }}
      >
        <View style={{ flexDirection: "row", alignItems: "baseline" }}>
          <Text style={styles.val}>15</Text>
          <Text style={styles.unit}>g</Text>
        </View>
      </View>
      <Text style={styles.hint}>WHO recommended 10g </Text>
      <Text style={styles.title}>Vitamin D (D2 + D3) </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: 146,
    width: 122,
    backgroundColor: "#DDEBCF",
    marginRight: 10,
    marginTop: 10,
    borderRadius: 15,
  },
  val: {
    fontFamily: "AvNextBold",
    fontWeight: "bold",
    fontSize: 30,
  },
  unit: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "AvNextBold",
  },
  title: {
    fontWeight: "bold",
    fontFamily: "AvNextBold",
    fontSize: 12,
  },
  hint: {
    fontSize: 7,
    marginBottom: 3,
    opacity: 0.7,
  },
});
