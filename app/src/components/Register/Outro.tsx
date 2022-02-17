import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "../General/Button";

interface Props {
  pass: () => void;
}

export const RegisterOutro: React.FC<Props> = ({ pass }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Thank you,</Text>
      <Text style={styles.info}>
        All set, now you're reay to start you adventure
      </Text>
      <Button txt={"Enter"} clicked={() => pass()} />
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
