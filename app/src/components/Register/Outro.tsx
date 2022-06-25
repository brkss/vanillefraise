import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "../General/Button";

interface Props {
  pass: () => void;
}

export const RegisterOutro: React.FC<Props> = ({ pass }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>That's It 😅</Text>
      <Text style={styles.info}>
        Everything's is set, enjoy the taste of eating right.
      </Text>
      <Button txt={"SAVE & ENTER"} clicked={() => pass()} />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "helvitica-condesed",
    color: "#434343",
  },
  info: {
    fontWeight: "bold",
    fontSize: 21,
    fontFamily: "helvitica-condesed",
    textAlign: "center",
    color: "#434343",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
