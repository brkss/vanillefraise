import React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";

export const ActiveAction: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>STOP</Text>
        </Pressable>
      </View>
      <View style={styles.item}>
        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>PAUSE</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  item: {
    width: "50%",
    padding: 5,
  },
  btn: {
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    backgroundColor: "#434343",
    borderRadius: 40,
  },
  btnText: {
    color: "white",
    fontSize: 26,
    fontFamily: "helvitica-condesed",
    marginBottom: 7,
  },
});
