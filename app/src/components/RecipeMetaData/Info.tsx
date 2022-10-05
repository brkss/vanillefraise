import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  prep?: string;
  cook?: string;
  total?: string;
}

export const Info: React.FC<Props> = ({ prep, cook, total }) => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.title}>Prep</Text>
        <Text style={styles.value}>{prep || "-"}</Text>
      </View>
      <View style={[styles.item, { alignItems: "center" }]}>
        <Text style={styles.title}>Cook</Text>
        <Text style={styles.value}>{cook || "-"}</Text>
      </View>
      <View style={[styles.item, { alignItems: "flex-end" }]}>
        <Text style={styles.title}>Total Time</Text>
        <Text style={styles.value}>{total || "-"}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 10,
  },
  item: {
    width: "33%",
    alignItems: "flex-start",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
	fontFamily: "AvNextBold",
	lineHeight: 20
  },
  value: {
    fontSize: 14,
	fontFamily: "AvNext",
  },
});
