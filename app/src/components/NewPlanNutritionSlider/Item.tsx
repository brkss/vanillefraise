import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

interface Props {
  pressed: () => void;
  recommended: number;
  unit: string;
  name: string;
}

export const Item: React.FC<Props> = ({ pressed, name, unit, recommended }) => {
  return (
    <Pressable onPress={pressed} style={styles.container}>
      <View
        style={{ flex: 1, justifyContent: "center", alignItems: "baseline" }}
      >
        <View style={{ flexDirection: "row", alignItems: "baseline" }}>
          <Text style={styles.val}>
            {recommended === -1 ? "_" : recommended}
          </Text>
          <Text style={styles.unit}>{unit}</Text>
        </View>
      </View>
      {recommended > -1 && (
        <Text style={styles.hint}>
          WHO recommended {recommended}
          {unit}{" "}
        </Text>
      )}
      <Text style={styles.title}>{name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: 146,
    width: 222,
    backgroundColor: "#ECE8E8",
    marginRight: 10,
    marginTop: 10,
    borderRadius: 15,
  },
  val: {
    fontFamily: "AvNextBold",
    fontWeight: "bold",
    fontSize: 30,
    marginRight: 5,
  },
  unit: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "AvNextBold",
  },
  title: {
    fontWeight: "bold",
    fontFamily: "AvNextBold",
    fontSize: 16,
  },
  hint: {
    fontSize: 14,
    marginBottom: 3,
    opacity: 0.7,
  },
});
