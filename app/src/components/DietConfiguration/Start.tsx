import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

interface Props {
  next: () => void;
}

export const StartDietConfiguration: React.FC<Props> = ({next}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Diet {"\n"}Configuration</Text>
      <View style={styles.line} />
      <View style={styles.contentContainer}>
        <Pressable style={styles.btn} onPress={() => next()}>
          <Text style={styles.btnText}>START</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //
    flex: 1,
  },
  title: {
    //
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 4,
  },
  line: {
    borderTopWidth: 1,
    borderTopColor: "#434343",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    height: 100,
    width: 100,
    backgroundColor: "#414040",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
  },
});
