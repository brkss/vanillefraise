import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { colors } from "../../../utils/colors";

interface Props {
  start: () => void;
}

export const ActivityConfigNow: React.FC<Props> = ({ start }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.info}>
        You're playing something,{"\n"}For 1 hour.
      </Text>
      <Text style={styles.calories}>320 - 550 Cal</Text>
      <Pressable style={styles.btn} onPress={() => start()}>
        <Text style={styles.btnText}>Start</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    fontSize: 27,
    fontWeight: "bold",
    fontFamily: "helvitica-condesed",
    textAlign: "center",
  },
  calories: {
    fontSize: 27,
    fontWeight: "bold",
    fontFamily: "helvitica-condesed",
    marginTop: 20,
  },
  btn: {
    height: 150,
    width: 150,
    backgroundColor: colors.c4,
    borderRadius: 150,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  btnText: {
    fontWeight: "bold",
    fontFamily: "helvitica-condesed",
    fontSize: 32,
    marginBottom: 5,
  },
});