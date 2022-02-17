import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "../General/Button";

interface Props {
  pass: () => void;
}

export const RegisterIntro: React.FC<Props> = ({ pass }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hello,</Text>
      <Text style={styles.info}>
        Brace yourself and let me take you on trip to find balence
      </Text>
      <Button txt={"Start"} clicked={() => pass()} />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 54,
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
